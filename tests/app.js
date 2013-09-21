var vows = require('vows'),
    assert = require('assert'),
    request = require('request'),
    app = require('../app.js');

var fetch = function(p, cb) {
    var url = 'http://127.0.0.1:8900' + p;
    request(url, cb);
};

var tests = {
    'is loaded': {
        topic: function() {
            return app;
        },
        'is an express app': function(topic) {
            assert.ok(topic);
            assert.isFunction(app);
            assert.isFunction(app.use);
            assert.isFunction(app.get);
        },
        'handlebars is loaded': function(topic) {
            assert.isFunction(topic.engines['.handlebars']);
        }
    },
    'should make requests': {
        to: {
            '/': {
                topic: function() {
                    var self = this;
                    fetch('/', function(err, res) {
                        self.callback(err, res);
                    });
                },
                'answer with a 200': function(topic) {
                    assert.equal(200, topic.statusCode);
                }
            },
            '/about': {
                topic: function() {
                    var self = this;
                    fetch('/about', function(err, res) {
                        self.callback(err, res);
                    });
                },
                'answer with a 200': function(topic) {
                    assert.equal(200, topic.statusCode);
                }
            },
            '/register': {
                topic: function() {
                    var self = this;
                    fetch('/register', function(err, res) {
                        self.callback(err, res);
                    });
                },
                'answer with a 200': function(topic) {
                    assert.equal(200, topic.statusCode);
                }
            }
        }
    }
};

vows.describe('app').addBatch(tests)['export'](module);
