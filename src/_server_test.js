"use strict";

var server = require("./server.js");

exports.testNothing = function(test) {
    test.equal(3, server.number(), "hello");
    test.done();
};