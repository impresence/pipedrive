import AppExtensionsSDK from "@pipedrive/app-extensions-sdk";

const sdkID = "ab75de33-db3d-4c4c-89ed-136adfa1b57b";
const clientId = "83ec1a35d73dd4ed";
const clientSecret = "83ec1a35d73dd4ed";

async function init() {
  const sdk = await new AppExtensionsSDK({ identifier: sdkID }).initialize({
    size: { height: 500, width: 500 },
  });
}
init();
