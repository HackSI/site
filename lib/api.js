var mongo = require('mongodb');
var joi = require('joi');
/*
 * We open and close this per request since we don't know how long between requests we will have.
 */

exports.validate = {
    payload: {
        host: joi.string().min(4).required(),
        ip: joi.string().ip({
            version: ['ipv4'],
            cidr: 'forbidden'
        })
    }
};

exports.deleteValidate = {
    payload: {
        host: joi.string().min(4).required()
    }
};

exports.delete = function(req, res) {
    var host = req.payload.host;
    mongo.connect(process.env.MONGODB_URI, function(err, db) {
        db.collection('pis').remove({ _id: host });
        db.close();
        res({
            removed: host
        });
    });
};

exports.post = function(req, res) {
    var pi = {
        _id: req.payload.host,
        host: req.payload.host,
        ip: req.payload.ip,
        stamp: Date.now(),
        from: req.headers['x-forwarded-for'] || req.info.remoteAddress
    };
    mongo.connect(process.env.MONGODB_URI, function(err, db) {
        db.collection('pis').update({ _id: pi._id }, pi, { upsert: true }, function(err) {
            if (err) {
                console.log(err);
            }
            db.close();
            res(pi);
        });
    });
};

exports.get = function(req, res) {
    mongo.connect(process.env.MONGODB_URI, function(err, db) {
        db.collection('pis').find({ $query: {}, $orderby: { host: 1 }}).toArray(res);
        db.close();
    });
};
