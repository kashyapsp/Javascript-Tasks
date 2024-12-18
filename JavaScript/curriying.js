function add(a,b,c){
    return a+b+c;
    }
    function curriedFunction(a){
    return function(b){
    return function(c){
    return a+b+c;
    }
    }
    }
    console.log(add(1,2,3));
    console.log(curriedFunction(1)(2)(3));