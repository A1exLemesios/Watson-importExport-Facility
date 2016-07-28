var stringifyXml = require ("./stringifyXml.js")();

"use strict";

function xmlStringifyTest () {
  xmlString = stringifyXml.getTemplate("Societes");
  console.log(xmlString);
};
