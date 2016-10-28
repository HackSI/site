'use strict';

const assert = require('assert');
const mockery = require('mockery');

mockery.registerMock('mongodb', {
    connect: (uri, callback) => {
        callback(null, {
            close: () => {},
            collection: () => {
                return {
                    remove: () => {},
                    update: (i, d, c, callback) => {
                        callback();
                    },
                    find: () => {
                        return {
                            sort: () => {
                                return {
                                    toArray: (callback) => {
                                        callback(null, [{
                                            stamp: Date.now()
                                        }]);
                                    }
                                };
                            }
                        };
                    }
                };
            }
        });
    }
});

mockery.enable({
    warnOnReplace: false,
    warnOnUnregistered: false
});

const api = require('../lib/api');

describe('api tests', () => {
    
    after(() => {
        mockery.deregisterAll();
    });

    it('should list items', () => {
        api.list((items) => {
            assert.ok(Array.isArray(items));
        });
    });

    it('should get items', () => {
        api.get({}, (items) => {
            assert.ok(Array.isArray(items));
        });
    });

    it('should add items with forwarded for header', () => {
        api.post({
            headers: {
                'x-forwarded-for': '10.10.10.10, 1.2.3.4'
            },
            payload: {
                host: 'localhost',
                ip: '5.4.3.2'
            }
        }, (item) => {
            assert.equal(item._id, 'localhost');
            assert.equal(item.host, 'localhost');
            assert.equal(item.ip, '5.4.3.2');
            assert.equal(item.from, '10.10.10.10');
            assert.ok(typeof item.stamp, 'date');
        });
    });

    it('should add items with out forwarded for header', () => {
        api.post({
            info: {
                remoteAddress: '1.2.3.4'
            },
            headers: {},
            payload: {
                host: 'localhost',
                ip: '5.4.3.2'
            }
        }, (item) => {
            assert.equal(item._id, 'localhost');
            assert.equal(item.host, 'localhost');
            assert.equal(item.ip, '5.4.3.2');
            assert.equal(item.from, '1.2.3.4');
            assert.ok(typeof item.stamp, 'date');
        });
    });

    it('should delete items', () => {
        api.delete({
            payload: {
                host: 'foo'
            }
        }, (json) => {
            assert.ok(json);
            assert.equal(json.removed, 'foo');
        });
    });
});
