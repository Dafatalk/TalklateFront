const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/", // ruta que deseas interceptar
    createProxyMiddleware({
      target: "http://192.168.20.2:8005",
      changeOrigin: true,
    })
  );
};
