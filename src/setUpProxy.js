import { createProxyMiddleware } from "http-proxy-middleware";

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost/Kmeans',
      changeOrigin: true,
    })
  );
};