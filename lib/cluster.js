var cluster = require('cluster');

var env = process.env.NODE_ENV || 'development';

var dev = (env === 'development');

module.exports = function(dir, workers) {
    
    var WORKERS = 1,
        workersCount = 0,
        fs = require('fs'),
        path = require('path'),
        spawn = function() {
            var spawned = 0;
            for (var i = workersCount; i < WORKERS; i++) {
                console.log('spawning worker');
                spawned++;
                var worker = cluster.fork();
            }
            workersCount += spawned;
        };


    if (dev) {
        try {
            var watch = require('watch');
            var respawn = function() {
                console.log('respawn workers');
                Object.keys(cluster.workers).forEach(function(k) {
                    var worker = cluster.workers[k].process;
                    console.log('killing worker', worker.pid);
                    worker.kill();
                });
            };
            watch.createMonitor(dir, {
                ignoreDotFiles: true
            }, function(monitor) {
                monitor.on('created', respawn);
                monitor.on('removed', respawn);
                monitor.on('changed', respawn);
            });
        } catch (e) {
            console.log('watch module is not installed, run `npm i` inside the api directory to update it for development');
        }
    } else{
        WORKERS = workers || 4;
    }

    cluster.on('exit', function(worker, code, signal) {
        workersCount--;
        spawn();
    });

    spawn();
};
