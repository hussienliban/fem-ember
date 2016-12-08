/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var Filter = require('broccoli-filter');
var { log, debug } = require("broccoli-stew");

function MyFilter(inputNode) {

  Filter.call(this, inputNode);
  this.comment = `/* ${new Date} */\t`;
}

MyFilter.prototype = Object.create(Filter.prototype);

MyFilter.prototype.processString = function(existingString) {

  return this.comment + existingString;

};

MyFilter.prototype.extensions = ['js'];

MyFilter.prototype.targetExtension = 'js';

module.exports = function(defaults) {


    var app = new EmberApp(defaults, {
        // Add options here
    });

    return new MyFilter(app.toTree());

};
