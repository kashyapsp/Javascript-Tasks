
function sortDescending(arr) {
    return arr.sort((a, b) => b - a);
}


const array = [1, 2, 3, 4, 5, 6, 7];
const sortedArray = sortDescending(array);


console.log(sortedArray); 
