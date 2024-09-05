const groupsText = ``

async function loadGroups() {
    await populateEnsuredUsers();
    
const groupRows = groupsText.split(/\r?\n/).slice(1);

console.log(groupRows)

const groups = groupRows.map((row) => {
    const rowComponents = row.split(',')
    return {
        name: rowComponents[0],
        members: rowComponents[1].split(';'),
        roles: rowComponents[2].split(';')
    }
})

console.log(groups)

groups.map(async (group) => {
    
})

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
      ensuredUsers[userKey] = u;
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
}
