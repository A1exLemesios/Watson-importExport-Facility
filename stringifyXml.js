
var fs   = require("fs");
var path = require("path");

"use strict";

module.exports = function() {

  var xmlToString = {

    getTemplate: function(filename) {
      var xmlObject = path.join(__dirname, "/sampleXmls/" + filename + '.xml');
      var contents = new XMLSerializer().serializeToString(xmlObject);
      return contents;
    }
  }

  return xmlToString;
}
