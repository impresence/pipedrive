import AppExtensionsSDK from "@pipedrive/app-extensions-sdk";

(async function() {
  const sdk = await new AppExtensionsSDK().initialize();
  console.log('initialized')
})();
