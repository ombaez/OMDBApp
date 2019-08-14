module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "/../back/public"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  context: __dirname,
  module: {
    rules: [
      {
        test: /jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        query: {
          presets: [
            "@babel/preset-env",
            "@babel/react",
            {
              plugins: ["@babel/plugin-proposal-class-properties"]
            }
          ]
        }
      },
      { test: /\.css$/, use: ["style-loader", "css-loader"] }
    ]
  },
  devtool: "source-map"
};
