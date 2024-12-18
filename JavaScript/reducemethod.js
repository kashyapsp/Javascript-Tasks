const numbers=[1,2,3,4,5];
const sum=numbers.reduce((accumulator,currentValue)=>{
return accumulator+currentValue;
},0);
console.log(sum);
const num=[9,8,7,9,10];
const add= num.reduce((a,b)=> a+b,0);
console.log(add);