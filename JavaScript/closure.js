function foo() {
    let b=1;
    function inner(){
        console.log(b);
        return b;
    }
    return inner;
}
 let greet=foo();
 console.log(greet());