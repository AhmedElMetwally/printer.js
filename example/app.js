"use strict";

const express = require('express');
const path = require('path');
const app = express();

/**************************************************
 *  import printer
 **************************************************/
const Printer = require('./lib/printer.js');


app.listen( 8080 , () => {

 /**************************************************
  *  use printer
  **************************************************/
  let meanStack = new Printer('mean stack' , '#' , ' ').write();
  console.log('\n');
  meanStack.print();
  console.log('\n');

});


app.use('/' , express.static(path.join(__dirname, 'public')))


module.exports = app;

