const groupsText = ``;

async function getGroups() {
  const result = await spFetch(
    `_api/web/lists/getByTitle('Organizations')/items?expand=Group`
  );

  if (result.isFailure()) return;

  const groups = result.value.results.map((org) => {
    return { Id: org.GroupId };
  });

  return groups;
}

async function grantGroupsAccess(groups) {
  groups.map((group) => addRoleToGroup(group, "Read"));
}

async function loadGroups() {
  await fetchSiteRoleDefs();
  await fetchRoleAssignments();

  const groups = await getGroups();

  await grantGroupsAccess(groups);
}

async function loadGroup(group) {
  // 1 Create Group
  const newGroup = await findOrCreateGroup(group.name);

  // 2 Set Owner
  const setOwnerResult = await setGroupOwner(newGroup);

  // 3 add members
  await Promise.all(
    group.members.map((member) => {
      return addUserToGroup(newGroup, member);
    })
  );

  // 4 Add Roles
  await Promise.all(group.roles.map((role) => addRoleToGroup(newGroup, role)));
}

async function findOrCreateGroup(groupName) {
  const findGroupUrl = `_api/web/SiteGroups/GetByName('${groupName}')?$expand=Users`;

  const existingGroupResult = await spFetch(findGroupUrl);

  if (existingGroupResult.isSuccess()) return existingGroupResult.value;

  const addGroupUrl = `_api/web/SiteGroups`;

  const requestParams = {
    body: {
      __metadata: { type: "SP.Group" },
      Title: groupName,
      OnlyAllowMembersViewMembership: false,
    },
  };

  const result = await spFetch(addGroupUrl, "POST", requestParams);
  if (result.isFailure()) return result;

  return result.value;
}

async function setGroupOwner(group) {
  const currCtx = new SP.ClientContext.get_current();
  const web = currCtx.get_web();

  const oGroup = web.get_siteGroups().getById(group.Id);
  oGroup.set_owner(web.get_associatedOwnerGroup());

  oGroup.update();
  await executeQuery(currCtx).catch((e) => {
    return Result.Failure(e);
  });

  return Result.Success(group);
}

async function addUserToGroup(group, userKey) {
  const ensuredUser = await ensureUser(userKey);
  if (ensuredUser.isFailure()) return;

  const addUserUrl = `_api/web/SiteGroups(${group.Id})/users`;
  const requestParams = {
    headers: {
      "content-type": "application/json; odata=verbose",
    },
    body: {
      __metadata: { type: "SP.User" },
      LoginName: ensuredUser.value.LoginName,
    },
  };

  const result = await spFetch(addUserUrl, "POST", requestParams);
  if (result.isFailure()) {
    console.warn(`Failed to add user`, userKey, ensuredUser);
  }
  return result;
}

async function addRoleToGroup(group, roleDefinitionKey) {
  const roleDef = siteRoleDefinitions.find(
    (siteRoleDef) => siteRoleDef.Name == roleDefinitionKey
  );

  if (!roleDef)
    return Result.Failure("Role Definition Not found: " + roleDefinitionKey);

  const addRoleUrl =
    `_api/web/RoleAssignments/` +
    `AddRoleAssignment(PrincipalId='${group.Id}',RoleDefId='${roleDef.Id}')`;

  return await spFetch(addRoleUrl, "POST");
}

const ensuredUsers = {};
async function populateEnsuredUsers() {
  const result = await spFetch("_api/web/siteusers");

  if (!result.isSuccess()) {
    alert("Unable to populate site users");
    return;
  }

  result.value.results
    .filter((u) => u.Email)
    .map((u) => {
      const userKey = u.Email.split("@")[0];
      ensuredUsers[userKey] = Result.Success(u);
    });
}

async function ensureUser(userKey) {
  if (ensuredUsers.hasOwnProperty(userKey)) {
    return ensuredUsers[userKey];
  }

  const uri = `_api/web/ensureuser('${userKey}')`;

  ensuredUsers[userKey] = spFetch(uri, "POST");

  return ensuredUsers[userKey];
}

let siteRoleAssignments;

async function fetchRoleAssignments() {
  const result = await spFetch(
    "_api/web/RoleAssignments?$expand=RoleDefinitionBindings,Member/Users"
  );
  if (result.isFailure()) {
    console.log(result.error);
    return;
  }
  siteRoleAssignments = result.value.results;
}

let siteRoleDefinitions;
async function fetchSiteRoleDefs() {
  const roleDefsUrl = "_api/web/roledefinitions";
  const result = await spFetch(roleDefsUrl);
  if (result.isFailure()) {
    console.error("No role defs");
    return;
  }

  siteRoleDefinitions = result.value.results;
}

async function spFetch(url, method = "GET", params = {}) {
  const siteEndpoint = url.startsWith("http")
    ? url
    : _spPageContextInfo.webAbsoluteUrl + "/" + url;

  if (params.body) {
    params.body = JSON.stringify(params.body);
  }
  const requestParams = {
    ...params,
    method,
    headers: {
      Accept: "application/json; odata=verbose;charset=utf-8",
      "content-type": "application/json; odata=verbose;charset=utf-8",
      "X-RequestDigest": document.getElementById("__REQUESTDIGEST").value,
      ...params?.headers,
    },
  };
  const response = await fetch(siteEndpoint, requestParams);

  const result = await response.json();
  if (response.ok) return Result.Success(result.d);

  return Result.Failure(result.error?.message?.value);
}

function executeQuery(currCtx) {
  return new Promise((resolve, reject) =>
    currCtx.executeQueryAsync(resolve, (sender, args) => {
      reject({ sender, args });
    })
  );
}

class Result {
  _success;
  error;
  isSuccess = () => this._success;
  isFailure = () => !this.isSuccess();

  static Success(value) {
    const result = new Result();
    result.value = value;
    result._success = true;
    return result;
  }

  static Failure(error) {
    const result = new Result();
    result._success = false;
    result.error = error;
    return result;
  }
}

loadGroups();
