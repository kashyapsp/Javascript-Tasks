/*call by value (or) pass by value: 
 actual parameters also called as arguments, passed to function when it is called.
 formal parameters also called as parameters, defination of a function.

 --> values of actual parameters are copied to the functions formal parameters.
 --> Two types of parameters are stored in different memory locations.
 --> So, any changes made inside the functions are not reflected in actual parameters(arguments)
 of the caller.
 --> Applicable to only primitive data types.
 */



 var y=100;
 function f1(x){
 console.log(x); //--> 100
 x=200;
 console.log(x); //--> 200
 }
 f1(y);
 console.log(y); //-->100


/* let a=5; // 1xyz
 let b; // 2xyz
 b=a; // copy value of a in to b var
 a=3;
 console.log(a); // 3
 console.log(b); // 5 */

 /*console.log(a==b);*/