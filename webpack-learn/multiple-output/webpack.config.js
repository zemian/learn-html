/*
 https://webpack.js.org/concepts/output/#multiple-entry-points
 https://webpack.js.org/configuration/output/
 */
const path = require("path");
module.exports = {
  mode: "development",
  entry: {
    main: './src/main.js',
    search: './src/search.js'
  }
};
