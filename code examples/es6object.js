//ES5 Object copy
var obj1 = { a: 1, b: 2 }
var obj2 = { a: 2, c: 3, d: 4}
var obj3 = Object.assign(obj1, obj2)

//ES6 Object copy
const obj1 = { a: 1, b: 2 }
const obj2 = { a: 2, c: 3, d: 4}
const obj3 = {...obj1, ...obj2}

//ES5 Object Extracting
var obj1 = { a: 1, b: 2, c: 3, d: 4 }
var a = obj1.a
var b = obj1.b
var c = obj1.c
var d = obj1.d

//ES6 Object Extracting
const obj1 = { a: 1, b: 2, c: 3, d: 4 }
const {
  a,
  b,
  c,
  d
} = obj1

//ES5 Object Assignment
var a = 1
var b = 2
var c = 3
var d = 4
var obj1 = { a: a, b: b, c: c, d: d }

//ES6 Object Assignment
var a = 1
var b = 2
var c = 3
var d = 4
var obj1 = { a, b, c, d }

//ES6 Export Module
var myModule = { x: 1, y: function(){ console.log('This is ES5') }}
module.exports = myModule;

//ES6 Export Module
const myModule = { x: 1, y: () => { console.log('This is ES5') }}
export default myModule;
//ES5 Module Import
var myModule = require('./myModule');

//ES6 Module Import
import myModule from './myModule';