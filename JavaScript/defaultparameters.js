function greets(name="World"){
    console.log(`Hello ${name}`);
    }
    greets();
    greets('Abc');
    function area(length=10,width=5){
    return length*width;
    }
    console.log(area());
    console.log(area(20,30));
    console.log(area(40));