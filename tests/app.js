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
                    assert.equal(topic.req.path, '/');
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
                    assert.equal(topic.req.path, '/about');
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
                    assert.equal(topic.request.uri.href, 'https://twitter.com/hacksi');
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
                    assert.equal(topic.request.uri.href, 'https://github.com/HackSI');
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
            /*
            '/google': {
                topic: function() {
                    var self = this;
                    fetch('/google', function(err, res) {
                        self.callback(err, res);
                    });
                },
                'answer with a 200': function(topic) {
                    assert.equal(topic.request.uri.href, 'https://plus.google.com/communities/108109882393061170322');
                    assert.equal(topic.statusCode, 200);
                }
            },
            */
            '/flickr': {
                topic: function() {
                    var self = this;
                    fetch('/flickr', function(err, res) {
                        self.callback(err, res);
                    });
                },
                'answer with a 200': function(topic) {
                    assert.equal(topic.request.uri.href, 'https://www.flickr.com/groups/hacksi/');
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
                    assert.equal(topic.req.path, '/sponsors');
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
                    assert.equal(topic.req.path, '/sponsors/levels');
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
                    assert.equal(topic.req.path, '/sponsors/letter');
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
                    assert.equal(topic.req.path, '/sponsors/letter/print');
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
                    assert.equal(topic.req.path, '/contact');
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
                    assert.equal(topic.req.path, '/schedule');
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
                    assert.equal(topic.req.path, '/live');
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
                    assert.equal(topic.req.path, '/code');
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
                    assert.equal(topic.req.path, '/press');
                    assert.equal(topic.statusCode, 200);
                }
            }
        }
    }
};

vows.describe('app').addBatch(tests)['export'](module);
