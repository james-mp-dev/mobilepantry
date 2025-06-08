console.log("\n\n LOADING APPS/CLIENT_APP/BABEL\n\n");

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [],
  };
};
