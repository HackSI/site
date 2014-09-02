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
                    assert.equal(topic.statusCode, 200);
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
                    assert.equal(topic.statusCode, 200);
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
                    assert.equal(topic.statusCode, 200);
                }
            },
            '/twitter': {
                topic: function() {
                    var self = this;
                    fetch('/twitter', function(err, res) {
                        self.callback(err, res);
                    });
                },
                'answer with a 200': function(topic) {
                    assert.equal(topic.statusCode, 200);
                }
            },
            '/github': {
                topic: function() {
                    var self = this;
                    fetch('/github', function(err, res) {
                        self.callback(err, res);
                    });
                },
                'answer with a 200': function(topic) {
                    assert.equal(topic.statusCode, 200);
                }
            },
            '/facebook': {
                topic: function() {
                    var self = this;
                    fetch('/facebook', function(err, res) {
                        self.callback(err, res);
                    });
                },
                'answer with a 200': function(topic) {
                    assert.equal(topic.statusCode, 200);
                }
            },
            '/google': {
                topic: function() {
                    var self = this;
                    fetch('/google', function(err, res) {
                        self.callback(err, res);
                    });
                },
                'answer with a 200': function(topic) {
                    assert.equal(topic.statusCode, 200);
                }
            },
            '/flickr': {
                topic: function() {
                    var self = this;
                    fetch('/flickr', function(err, res) {
                        self.callback(err, res);
                    });
                },
                'answer with a 200': function(topic) {
                    assert.equal(topic.statusCode, 200);
                }
            },
            '/sponsors': {
                topic: function() {
                    var self = this;
                    fetch('/sponsors', function(err, res) {
                        self.callback(err, res);
                    });
                },
                'answer with a 200': function(topic) {
                    assert.equal(topic.statusCode, 200);
                }
            },
            '/sponsors/levels': {
                topic: function() {
                    var self = this;
                    fetch('/sponsors/levels', function(err, res) {
                        self.callback(err, res);
                    });
                },
                'answer with a 200': function(topic) {
                    assert.equal(topic.statusCode, 200);
                }
            },
            '/sponsors/letter': {
                topic: function() {
                    var self = this;
                    fetch('/sponsors/letter', function(err, res) {
                        self.callback(err, res);
                    });
                },
                'answer with 200': function(topic) {
                    assert.equal(topic.statusCode, 200);
                }
            },
            '/sponsors/letter/print': {
                topic: function() {
                    var self = this;
                    fetch('/sponsors/letter/print', function(err, res) {
                        self.callback(err, res);
                    });
                },
                'answer with 200': function(topic) {
                    assert.equal(topic.statusCode, 200);
                }
            },
            '/contact': {
                topic: function() {
                    var self = this;
                    fetch('/contact', function(err, res) {
                        self.callback(err, res);
                    });
                },
                'answer with a 200': function(topic) {
                    assert.equal(topic.statusCode, 200);
                }
            },
            '/schedule': {
                topic: function() {
                    var self = this;
                    fetch('/schedule', function(err, res) {
                        self.callback(err, res);
                    });
                },
                'answer with a 200': function(topic) {
                    assert.equal(topic.statusCode, 200);
                }
            },
            '/live': {
                topic: function() {
                    var self = this;
                    fetch('/live', function(err, res) {
                        self.callback(err, res);
                    });
                },
                'answer with a 200': function(topic) {
                    assert.equal(topic.statusCode, 200);
                }
            },
            '/code': {
                topic: function() {
                    var self = this;
                    fetch('/code', function(err, res) {
                        self.callback(err, res);
                    });
                },
                'answer with a 200': function(topic) {
                    assert.equal(topic.statusCode, 200);
                }
            },
            '/press': {
                topic: function() {
                    var self = this;
                    fetch('/press', function(err, res) {
                        self.callback(err, res);
                    });
                },
                'answer with a 200': function(topic) {
                    assert.equal(topic.statusCode, 200);
                }
            }
        }
    }
};

vows.describe('app').addBatch(tests)['export'](module);
