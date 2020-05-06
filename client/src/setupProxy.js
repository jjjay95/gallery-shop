const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://gallery-eshop.herokuapp.com',
            changeOrigin: true,
        })
    );
};