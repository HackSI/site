var localCSS = {};

module.exports = function(app) {
    return {
        addCSS: function (url) {
            localCSS[url] = true;
            return '';
        },
        writeCSS: function() {
            var str = '',
                keys = [],
                env = app.get('env');

            if (env === 'development') {
                Object.keys(localCSS).forEach(function(url) {
                    str += '<link rel="stylesheet" href="' + url + '"\>\n';
                });
            } else {
                str += '/combo?';
                Object.keys(localCSS).forEach(function(url) {
                    keys.push(url);
                });
                str += keys.join('&');
                str = '<link rel="stylesheet" href="' + str + '"\>\n';
            }
            return str;
        }
    };
};
