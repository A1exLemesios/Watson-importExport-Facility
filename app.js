/*
 * Test file
 *
 * Authors:
 *
 * - Alexandros Lemesios, @a1exLemesios, alex.lemesios@gmail.com
 */

"use strict";

const xml2js      = require("xml2js");
const xmlProvider = require("./xml-provider")();

const parser = new xml2js.Parser({explicitArray : false});
const xmlString = xmlProvider.getXMLString("Personnes.xml");


// @TODO Check and see if boolean values work .
parser.parseString(xmlString, function (error, result) {
  if (error) {
    console.log(error);
    return false;
  }

  console.log(result);
});
