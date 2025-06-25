/* var*/
var d=10;
console.log(d);
var d=20.4;
console.log(d);
/*we can redeclare the variables in javascript. when we use var and can only be redeclared and reassigned within the function block*/
d=35;
console.log(d);/*hence known as function scope*/


/*let*/
/* let will not allow us to redeclare the variable but allows us to reassign the value with in a block*/
let a=20;
console.log(a);
/*let a=30;
console.log(a); here we are redeclaring and it gives syntax error*/
a=90;
console.log(a);/*hence known as block scope*/


/*constant*/
const b=10;
console.log(a);
/*
const b=30;
console.log(b);
b=96;
console.log(b);
*/
/*reassgigning and redeclaring both are not possible in the const*/



