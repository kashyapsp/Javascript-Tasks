/*function isEven(x) {
    console.log(`x is ${x%2 == 0 ? 'even': 'odd'}`);
}
isEven(12);*/

//String Replace Method:

let text = "Visit Amazon!";
let result = text.replace("Amazon", "Google")
                 .replace("Visit","Welcome to");
console.log(result);
