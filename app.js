const sdkID = "ab75de33-db3d-4c4c-89ed-136adfa1b57b";
// const clientId = "83ec1a35d73dd4ed";
// const clientSecret = "6518793203ce79723996b26f8faf9bc0bd2a8979";
const apiKey = "9120af394df9e7eb5f262b64fbf92690228a0cb6";
const ClientId = "6799ba7898f04ad8";
const ClientSecret = "78e892b74083d927953acf9f9cb46e2a943a4786";
const code = "11338626.15456594.280e20a303fcadf8a53c7b0e5b30e96f650d5104";
const auth = {
  access_token:
    "6LcxTod0WdO9mJs9RzHGmr1OwjriT4ZNe7PFsxR91PrjnVpVJoeJkOgxlcVqaJwkh6DbR1oZWQQu/fF7cfjaRyKnOTWtajaCaXELd94Scy7FwKxKrj1wF41YdxJe/WjEOQ7ORIhrlBiSV7Fk5uqJV12EyrhqABXa1Wju4rjkkYVv1Mzn8EN+fqopNjtCWwoItum4bjFwBeyihO+FSbfTAxH1u8HLFe8d//4gGS1xQQY40yhXQQES6SXzEOa8RcLB03zwOYn1g+weLrxd+wqhiRyehF7j5w==",
  token_type: "Bearer",
  expires_in: 3599,
  refresh_token: "11338626:15456594:5934c951cb33bf46704c7b82618f7f63ab21d9d9",
  scope: "base,deals:full,users:read",
  api_domain: "https://salesautomators7.pipedrive.com",
}(async function () {
  const sdk = await new AppExtensionsSDK().initialize({
    size: { height: 800, width: 1200 },
  });
  console.log("initialized");
})();

const form = document.getElementById("container");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const accessToken =
    "6LcxTod0WdO9mJs9RzHGmr1OwjriT4ZNe7PFsxR91PrjnVpVJoeJkOgxlcVqaJwkh6DbR1oZWQQu/fF7cfjaRyKnOTWtajaCaXELd94Scy7FwKxKrj1wF41YdxJe/WjEOQ7ORIhrlBiSV7Fk5uqJV12EyrhqABXa1Wju4rjkkYVv1Mzn8EN+fqopNjtCWwoItum4bjFwBeyihO+FSbfTAxH1u8HLFe8d//4gGS1xQQY40yhXQQES6SXzEOa8RcLB03zwOYn1g+weLrxd+wqhiRyehF7j5w==";
  const apiUrl = "https://api.pipedrive.com/v1/deals";

  // Собираем данные из полей формы
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;

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
        'Authorization': `Bearer ${accessToken}`,
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Ошибка при отправке данных на сервер");
    }

    const responseData = await response.json();
    console.log('Создана новая сделка:', responseData);
  } catch (error) {
    console.error("Ошибка при отправке данных на сервер:", error);
  }
});
