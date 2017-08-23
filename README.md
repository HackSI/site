The HackSI website
=====================

The HackSI website

Development
-----------

   * Install [Node.js](http://nodejs.org/)
   * Clone this repo
   * `cd site`
   * `npm install`
   * `npm start`
   * Visit `http://127.0.0.1:8900/`

Testing & Linting
-----------------

`npm test`

Production
----------

`npm -g install grunt-cli`

   * `cd site`
   * `grunt`
   * `git commit -am "CSS files"`


Deployment
----------

Pushing the site will automatically build it on Travis and deploy it to Heroku.

Build Status
------------

[![Build Status](https://travis-ci.org/HackSI/site.png?branch=master)](https://travis-ci.org/HackSI/site)
