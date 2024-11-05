const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/", // ruta que deseas interceptar
    createProxyMiddleware({
      target: "http://localhost:8005",
      changeOrigin: true,
    })
  );
};
