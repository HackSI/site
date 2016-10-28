'use strict';
const mongo = require('mongodb');
const joi = require('joi');
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

exports.delete = (req, res) => {
    const host = req.payload.host;
    mongo.connect(process.env.MONGODB_URI, (err, db) => {
        db.collection('pis').remove({ _id: host });
        db.close();
        res({
            removed: host
        });
    });
};

exports.post = (req, res) => {
    const from = req.headers['x-forwarded-for'] || req.info.remoteAddress;
    const pi = {
        _id: req.payload.host,
        host: req.payload.host,
        ip: req.payload.ip,
        stamp: Date.now(),
        from: from.split(', ')[0]
    };
    mongo.connect(process.env.MONGODB_URI, (err, db) => {
        db.collection('pis').update({ _id: pi._id }, pi, { upsert: true }, (err) => {
            if (err) {
                console.log(err);
            }
            db.close();
            res(pi);
        });
    });
};

exports.get = (req, res) => {
    exports.list((items) => {
        res(items);
    });
};

exports.list = (callback) => {
    mongo.connect(process.env.MONGODB_URI, (err, db) => {
        db.collection('pis').find().sort({ host: 1 }).toArray((err, items) => {
            callback(items);
            db.close();
        });
    });
    
};
