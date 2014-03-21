var os = require('os');

module.exports = function () {
    return function (req, res, next) {
        req.ip = req.realIP = req.socket.remoteAddress;
        req.host = req.headers['host'];

        res.setHeader('X-Powered-By', 'Express on Node.js (' + process.versions.node + ')');
        res.setHeader('x-server', os.hostname());

        next();
    };
};
