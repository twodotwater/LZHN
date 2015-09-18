"use strict"
typeof 555;
/*
number
*/
typeof 555.55;
/*
number
*/
typeof NaN;
/*
number
*/

typeof '555';
/*
string
*/

typeof true;
/*
boolean
*/

typeof alert;
/*
function
*/

typeof undefined;
/*
undefined
*/

typeof null;
/*
object
*/
typeof [];
/*
object
*/
typeof {};
/*
object
*/

var t = new Number(555);
typeof t;
/*
object
*/
t = String('555');
typeof t;
/*
string
*/
t = Boolean(false);
typeof t;
/*
boolean
*/
t;
/*
false
*/
t = Boolean("false");
typeof t;
/*
boolean
*/
t;
/*
true
*/