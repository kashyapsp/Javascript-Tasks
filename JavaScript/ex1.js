/*const example = new Array ("ex1","ex2",10,true);
console.log(example);
example[2]=70;
console.log(example);
example[4]=100;
console.log(example);*/

//const sample = ["Java",30,true,"React",70,"CSS"];
//length() -> Predefined method to check the size of an array. -> method
//let lengthofarr = sample.length;
//console.log(lengthofarr);

//We indicate a method by paranthesis.

//toString() -> converts array to a string. -> method

//console.log(sample.toString());

//at() -> to access the element at that particular position or index.

//join() -> Join all array elements into a string.

//let ex2 = sample.join("*");
//console.log(ex2);
//const arrone = ["java","css","bootstrap",30,70,"true"];
/*console.log(arrone);
arrone.shift();
console.log(arrone);
arrone.pop();
console.log(arrone);*/

//arrone.splice(2,1,78);
//console.log(arrone);
//arrone.splice(2,1);
//console.log(arrone);
//arrone.splice(1,2);
//console.log(arrone);
//const arrtwo=[30,40,70,80,90];
//const concatarray=arrtwo.concat(arrone);
//console.log(concatarray);
//const concatarrtwo=arrone.concat(arrtwo);
//console.log(typeof(concatarrtwo));
//console.log(concatarrtwo[1]);

//ASSOCIATIVE ARRAYS


//Methods of defining an object
// 1.With object literal
/*const person = {
    // Add Properties
    firstName:"Aaaa",
    lastName:"Bbbb",
    age:470,
    height:"tenFeet"
}
console.log(person.firstName);*/

// 2.With new keyword
/*const Employee = new Object({
    name:"Aaaa",
    age:470,
    role:"SDE"
});*/
//console.log(Employee);
//Accessing property of an object with Dot notation.
//console.log(Employee.name);
//Accessing property of an object with Array notation.
//console.log(Employee['age']);

/*const Address = new Object({
    street:"AB street",
    city: "CD city",
   'building no':"AB apartments"
});
console.log(Address['building no']);//Accessing with Array notation because it contains space in between 'building no'. */
//console.log(Employee.state);// Accessing the proprety that is not defined for an object will give u undefined.
/*console.log(Employee);
Employee.name = "Bbbb";// Replace the value of property.
console.log(Employee);


console.log(Employee.state);
// Adding a new property to an existing object.
Employee.state="Telangana";
console.log(Employee.state);
// Deleting a property of an object.
delete Employee.state;
console.log(Employee.state);
// in operator is used to check whether the property exists for an object or not -> it returns boolean values.
console.log('state' in Employee);// false -> It does not exists.
console.log('name' in Employee);// true -> Exists.*/

/*const car = new Object({
    name:"Rollsroyce",
    color:"white",
    speed:"400",
    stop: function(){
        console.log("second method of object");
    },
    drive (){
        console.log("Third method of object car");
    }
});
console.log(car);*/
/*car.start = function(){
    console.log("first method of car object");
}
car.start();
console.log(car);
//function expression:
const start = function fun1(){
    console.log("function expression");
}
console.log(start);*/
 /*function start(){
    console.log("first method of car object");
}
car.start=start;// Assigning function to start property.
car.start();
console.log(car);*/

/*const person ={
    firstName:'Aaa',
    lastName:'Bbb',
    greet: function(){
        console.log("Welcome");
    },
    getFullName: function(){
        return this.firstName+' '+this.lastName;
    }
};
 console.log(person.getFullName());*/

//Nested Objects:
 /*const person = {
    firstName:"Aaa",
    lastName:"Bbb",
    age:400,
    address:{
        HNo:"400-400/300A",
        Street:"ABC street",
        Colony:"XYZ colony",
    country:{
        State:"Telangana",
        Country:"India"
    }
  }
}
//console.log(person.address);
//console.log(person.address.Colony);
//console.log(person);
//console.log(person['address']);
//console.log(person['address']['country']);
var data = "address"; // Here we stored address in 'data variable'.
var data2 = "country";  
console.log(person[data]); // Array Notation --> Result: Data.
console.log(person.data); // Dot Notation --> Result: undefined.*/

// ARITHMETIC OPERATORS

/*var x=20;
var y=10;
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);*/

// ASSIGNMENT OPERATORS

/*var x=20;
console.log(x);
console.log(x+=10);
console.log(x-=10);*/

// Comparison/Relational Operators

//var x=10;
//var y=20;
/*if(x==y){
    console.log("True");
}else {
    console.log("False");
}*/

/*if(x!=y){
    console.log("True");
}else {
    console.log("False");
}*/

// Bitwise Operators 

/*var x=10;
var y=20;
var z=30;
if(x>y & x>z){
    console.log("x is greater than y and z");
}else if(y>x & y>z){
    console.log("y is greater than x and z");
}else{
    console.log("z is greater than x and y");
}*/

/*var firstName="Aa";
var secondName="Bb";
if(firstName=="Aa" | secondName=="Cc"){
    console.log("Hello");
}*/

/***** if Condition *******/
/*let age = 18;
if(age<18){
    console.log("You are eligible to vote in elections");
}
else{
    console.log("You are not eligible to vote in elections");
}*/
//let firstName="Aa";
//let password="Aa@123";
/* Nested if
if(firstName=='Aa'){
    if(password=='Aa@123'){
        console.log("Welcome to Home Page");
    }
}*/
/* && Operator
if(firstName=='Aa' && password.length<=10){
    console.log("Welcome to Home Page");
}*/
/*** Switch statement ***/
/*let day=4;
let dayName;

switch(day){
    case 1:
    dayName ='Sunday';
    break;
    case 2:
    dayName ='Monday';
    break;
    case 3:
    dayName ='Tuesday';
    break;
    case 4:
    dayName ='Wednesday';
    break;
    case 5:
    dayName ='Thursday';
    break;
    case 6:
    dayName ='Friday';
    break;
    case 7:
    dayName ='Saturday';
    break;
    default :
    dayName ="Invalid Entry";
}
  console.log(dayName);*/

/***  break and continue ***/
/*for(let i=0; i<10; i++) {
    if(i==7){
        //break;
        continue;
    }
    console.log(i);
}*/

/*for(let i=2;; i+=2){
    console.log(i);
    if(i>10){
        break;
    }
}*/
/*let i=1;
for(;;){
    if(i>10){
        break;
    }
    console.log(i);
    i+=2;
}*/
/*let sum=0;
for(let i=0;i<=9;i++,sum+=i);
console.log(sum);*/
/*let count=0;
while(count<10){
    console.log(count);
    count+=2
}*/
/*function add(number1, number2){
    return number1+number2;
}
console.log(add(6,9));// invoke a function
console.log(add); // function name*/
/*function square(value){
    return value*value;
}
console.log(square(12));*/
/*function say(){
    console.log("Hello");
}
say();*/
/*function say(message){
    return message;
}
console.log(say("Hello"));*/
/*function say(message="no corresponding value passed"){
      return message;
}
console.log(say("Hello"));*/

/*function greetings() {
    return function greet() {
        console.log("returning a function to other function");
    }
}
var a=greetings();
a();
var m= function add(a,b){
    var c=a+b;
    console.log(c);
    console.log("An Function Expression");
    console.log("parent function");
    function sample(){
        console.log(c);
        console.log("child function");
    }
        return sample;
}
var inner=m('abc','def');
inner();*/

/*function f1(a){
a();
console.log(a);
}
f1(function(){
    console.log("Passing a Anonymous Function as argument to f1 Function");
})*/

/*var greet= function (){
 console.log("Welcome to Login Page");
}
console.log(greet);
greet();*/

/*** Anonymous Function ---> Second Method ***/
/*( ()=> {
    console.log("hello");
}
) ();*/

/*var m= function add(a,b){
    var c=a+b;
    console.log(c);
    console.log("An function Expression");
}
m(abc,def);*/

/*var sample = function(){
    console.log("Anonymous function");
}
sample();*/

/*var m= function add(a,b){
    var c=a+b;
    console.log(c);
    console.log("An function Expression");
    console.log("Parent function");
    function sample(){
        console.log(c);
        console.log("Child Function");
    }
    return sample;
}
var z=m('abc','def');
z();*/

/*function f1(a){
 a();
 console.log(a);
}
f1(function(){
    console.log("Passing a Anonymous function as argument to f1 function");
})*/

/*function greetings() {
    return function greet(){
        console.log("returning a function to other function");
    }
}
var a=greetings();
a();*/

/*(function(){
    console.log("An IIFE 1");
})();*/

/*** Define an object ***/
/*let person = {
    name: "Aa",
    age: 300
};
function z(object){
    console.log(object.name + "," + object.age);
}
z(person);*/

/*** Example for call Function ***/

var customer={
    name:"Aa",
    address:"Hyd",
    details: function(){
        return this.name+","+this.address
    }
}
console.log(customer.details());

var customer2={
    name:"b",
    address: "Delhi",
}
// access the details() --> method of customer (object) in customer2 (object)
console.log(customer.details.call(customer2));