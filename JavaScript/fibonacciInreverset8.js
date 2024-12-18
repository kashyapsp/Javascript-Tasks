function generateFibonacciSeries(n) {
    let fibonacci = [0, 1]; 

    
    for (let i = 2; i < n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    return fibonacci;
}

function displayFibonacciInReverse(n) {
    const fibonacciSeries = generateFibonacciSeries(n);
    const reversedSeries = fibonacciSeries.reverse(); 

    console.log("Fibonacci Series in Reverse Order:");
    console.log(reversedSeries.join(", "));
}


const numberOfTerms = 9; 
displayFibonacciInReverse(numberOfTerms);
