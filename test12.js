"use strict";

const xml2js      = require("xml2js");
const xmlProvider = require("./xml-provider")();

const parser = new xml2js.Parser({explicitArray: false});


let xmlString = xmlProvider.getXMLString("Personnes.xml");
console.log(xmlString);
Personnes.getElementsByTagName("personne")[0].nodeValue = "personne0";
