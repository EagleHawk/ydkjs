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

