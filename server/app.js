"use strict";

const express = require('express');
const path = require('path');
const app = express();

/**************************************************
 *  import printer
 **************************************************/
const Printer = require('./../lib/printer');


app.listen( process.env.PORT || '3000' , () => {

 /**************************************************
  *  use printer
  **************************************************/
  let meanStack = new Printer('mean stack' , '#' , ' ').write();
  console.log('\n');
  meanStack.print();
  console.log('\n');

});


// serve lib 
app.use('/lib' , express.static(path.join(__dirname, '../lib')))

// sent html file
app.use( '/' ,function(req, res) {
  res.sendFile(path.join(__dirname, '../front-end/index.html'));
});
