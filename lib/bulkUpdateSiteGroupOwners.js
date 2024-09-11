async function main() {
  const results = await spFetch("_api/web/sitegroups");

  if (results.isFailure()) return;

  const allGroups = results.value.results;

  const groupsToUpdate = allGroups.filter((g) => g.OwnerTitle == "A123 Owners");

  groupsToUpdate.map(setGroupOwner);
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

main();
