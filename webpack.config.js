const path = require('path')

module.exports = {
  entry: "./src/octocat.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "octocat.js",
    library: "Octocat",
    libraryTarget: "umd",
  },
}
