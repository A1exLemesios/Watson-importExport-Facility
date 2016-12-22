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

const parser = new xml2js.Parser({explicitArray:false});

 var getDetails = function () {

  let xmlString = xmlProvider.getXMLString("Personnes.xml");
  parser.parseString(xmlString, function (error, result) {
    if (error) {
      console.log(error);
      return false;
    }
    console.log(JSON.stringify(result, null, 4));
    console.log(result.Personnes.Personne[0].Nom);

    return result;
  });
};

var  getAssociations = function () {

  let xmlString = xmlProvider.getXMLString("LienSocieteBeneficiaire.xml");
  parser.parseString(xmlString, function (error, result) {
    if (error) {
      console.log(error);
      return false; // what happens if i throw error instead , and without the return false ?
    }
  //  console.log(JSON.stringify(result, null, 4));
    return result;
  });
}

getDetails();
getAssociations();
