const { override, addWebpackAlias } = require("customize-cra");

const path = require("path");

module.exports = override(
  addWebpackAlias({
    "/src": path.resolver(__dirname, "src")
  })
);
