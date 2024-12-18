let a = { greetings:"welcome" };
let b;
b=a;
a.greetings= "welcome to login";
console.log(a); //--> welcome to login
console.log(b); //--> welcome to login