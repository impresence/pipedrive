// const sdkID = "ab75de33-db3d-4c4c-89ed-136adfa1b57b";
// const code = "11339253.15456594.a32ba4a3ad08321fa1ba057aa1f4d78fabdaabc0";
const auth = {
  access_token:
    "/zqM1Ovy+CidJWcS2rX/mouiH3/sFuL8q+6gK1XIIhmenQEXxMxSRgnuRG+ihULZO01dnAE0yz49KlpWu6GREB7jWBTqNVop8iddEPVK6a8GRbZGrbm5x1LTmJOKGDQcdZCZ9YB7+aLVsLA7eC22UjHwWgCaC42ht12FSjkU7pO3yn/SrYwYIpsXMg4Kpb4ddQ1MD3mo3jZXWjer3m8I/BqE6eTvw8cSWPUeiJC/6KJILcCNF6G/XfED/HJM0z/fybL/8Ex3jnW/mlb2Ey3nIQKYH2yjMg==",
  token_type: "Bearer",
  expires_in: 3599,
  refresh_token: "11339253:15456594:859f5c5a6de370f64c8acaf818af45727d87ad5a",
  scope: "base,deals:full,users:read",
  api_domain: "https://salesautomators-sandbox8.pipedrive.com",
};

const apiKey = "9120af394df9e7eb5f262b64fbf92690228a0cb6";
const ClientId = "6799ba7898f04ad8";
const ClientSecret = "78e892b74083d927953acf9f9cb46e2a943a4786";

(async function () {
  const sdk = await new AppExtensionsSDK().initialize({
    size: { height: 800, width: 1200 },
  });
  console.log("initialized");
})();

const form = document.getElementById("container");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const accessToken =
    "/zqM1Ovy+CidJWcS2rX/mouiH3/sFuL8q+6gK1XIIhmenQEXxMxSRgnuRG+ihULZO01dnAE0yz49KlpWu6GREB7jWBTqNVop8iddEPVK6a8GRbZGrbm5x1LTmJOKGDQcdZCZ9YB7+aLVsLA7eC22UjHwWgCaC42ht12FSjkU7pO3yn/SrYwYIpsXMg4Kpb4ddQ1MD3mo3jZXWjer3m8I/BqE6eTvw8cSWPUeiJC/6KJILcCNF6G/XfED/HJM0z/fybL/8Ex3jnW/mlb2Ey3nIQKYH2yjMg==";
  const apiUrl = "https://api.pipedrive.com/v1/deals";

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;

  const formData = {
    title: "test deal",
    // firstName: firstName,
    // lastName: lastName,
    // phone: phone,
    // email: email,
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(formData),
    });

    const responseData = await response.json();
    console.log("Created new deal:", responseData);
  } catch (error) {
    console.error("Error:", error);
  }
});
