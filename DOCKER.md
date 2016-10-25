Docker Setup
============

Install Docker for Mac: https://www.docker.com/products/overview

* `make` to build the base container (make each time you change the app)
* `make run` to start it http://127.0.0.1:3000
* `docker-compose up` start both the mongo and site containers for API testing
* `docker-compose build app` to build the app container for compose
