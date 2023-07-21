const sdkID = "ab75de33-db3d-4c4c-89ed-136adfa1b57b";
// const clientId = "83ec1a35d73dd4ed";
// const clientSecret = "6518793203ce79723996b26f8faf9bc0bd2a8979";
const apiKey = "9120af394df9e7eb5f262b64fbf92690228a0cb6";
const ClientId = "6799ba7898f04ad8";
const ClientSecret = "78e892b74083d927953acf9f9cb46e2a943a4786";
const code = "11339253.15456594.a32ba4a3ad08321fa1ba057aa1f4d78fabdaabc0";
const auth = {
  access_token:
    "LyzxsAeokq1lYuZ49oNKiH+0j+hd9CfwRVF1S7u/eoSciDcfIdaUnFJM/2iT9unHBs7yplY7YfJRPlaV/07ouFu9vsYClxk8yun94njV4YLXNHd7tQ9bsG1HN+m5seahCF4J6M83zhjJ0e5TJYTQXODI/rf/xkN5T16NkJ0BCFUbny1O7/5PjEOvcTuOQ3nn4xqqb+dkhN8U105Jq4eDnAEKXcJSU4hHmtkvC1jXJYSxkz05JiPbUFCBVyE4kjCKWkYoXOz4IafAiWoyqEbt1SR+ryuSKA==",
  token_type: "Bearer",
  expires_in: 3599,
  refresh_token: "11339253:15456594:859f5c5a6de370f64c8acaf818af45727d87ad5a",
  scope: "base,deals:full,users:read",
  api_domain: "https://salesautomators-sandbox8.pipedrive.com",
};

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
    "LyzxsAeokq1lYuZ49oNKiH+0j+hd9CfwRVF1S7u/eoSciDcfIdaUnFJM/2iT9unHBs7yplY7YfJRPlaV/07ouFu9vsYClxk8yun94njV4YLXNHd7tQ9bsG1HN+m5seahCF4J6M83zhjJ0e5TJYTQXODI/rf/xkN5T16NkJ0BCFUbny1O7/5PjEOvcTuOQ3nn4xqqb+dkhN8U105Jq4eDnAEKXcJSU4hHmtkvC1jXJYSxkz05JiPbUFCBVyE4kjCKWkYoXOz4IafAiWoyqEbt1SR+ryuSKA==";
  const apiUrl = "https://api.pipedrive.com/v1/deals";

  // Собираем данные из полей формы
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  console.log(email)

  const formData = {
    firstName: firstName,
    lastName: lastName,
    phone: phone,
    email: email,
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

    if (!response.ok) {
      throw new Error("Ошибка при отправке данных на сервер");
    }

    const responseData = await response.json();
    console.log("Создана новая сделка:", responseData);
  } catch (error) {
    console.error("Ошибка при отправке данных на сервер:", error);
  }
});
