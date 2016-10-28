'use strict';

const assert = require('assert');
const request = require('request');

//This starts the server...
require('../app.js');

const fetch = function(p, cb) {
    const url = `http://127.0.0.1:8900${p}`;
    request(url, cb);
};

describe('main routes', () => {

    const routes = require('../lib/routes');
    routes.forEach((route) => {
        if (route.method === 'GET' && !route.path.includes('{')) {
            it(`should render ${route.path}`, function(done) {
                this.timeout(15000); //For external requests..
                fetch(route.path, function(err, res) {
                    assert.equal(res.statusCode, 200);
                    done();
                });
            });
        }
    });

    it('should show home page on unknown route', (done) => {
        fetch('/does/not/exist', function(err, res) {
            assert.equal(res.statusCode, 200);
            done();
        });
    });

});
