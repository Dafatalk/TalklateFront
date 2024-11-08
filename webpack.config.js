const path = require("path");

module.exports = {
  entry: "./src/index.tsx", // Punto de entrada
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Manejo de archivos CSS
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  mode: "production", // Modo producción
};
