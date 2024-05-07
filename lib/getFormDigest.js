async function getFormDigest() {
		    return $.ajax({
		        url: "https://edcsst.cgfsdc.state.sbu/EDCS/_api/contextinfo",
		        method: "POST",
		        headers: { "Accept": "application/json; odata=verbose" }
		    });
		}

async function fetchFormDigest() {
  const response = await fetch('_api/contextinfo', {
    method: 'POST',
    headers: {
      Accept: "application/json; odata=verbose;charset=utf-8",
      "content-type": "application/json; odata=verbose;charset=utf-8",
    },
  });

  if (!response.ok) return;
  return response.json();
}

data = await fetchFormDigest();

data.d.GetContextWebInformation.FormDigestValue
