
xml2js = require('xml2js');
var xml  = require("./importXml")();
// var util = require("util");
var parser = new xml2js.Parser({explicitArray : false});

"use strict";

/*
parseString(xml, {normalizeTags : true}, function (err, result) {
    let customer = result ;
    let tempGetSingles = {};
    console.log("Complete result :");
    console.dir(customer);
    console.log("Customer name : ", customer.singles.main.nom);

});
*/

 // @TODO Check and see if boolean values work .
  parser.parseString(xml, function (err, result) {
    let customer = result ;
    console.dir(customer);
    console.log('Done');
    console.log("Customer name : ", customer.singles.main.Nom);
  });
