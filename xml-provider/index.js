/*
 * Provides an XML string, reading from a file
 *
 * Authors:
 *
 * - Alexandros Lemesios, @a1exLemesios, alex.lemesios@gmail.com
 */

const fs   = require("fs");
const path = require("path");

"use strict";

module.exports = function() {

  const XmlProvider = {

    getXMLString: function(filename) {
      var contents = fs.readFileSync(path.join(__dirname, "/templates/" + filename)).toString();

      return contents;
    }
  }

  return XmlProvider;
}
