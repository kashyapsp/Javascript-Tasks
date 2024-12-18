function removeDuplicates(arr) {
    const uniqueElements = [...new Set(arr)]; 
    return uniqueElements;
}


const array = [9, 7, 3, 7, 2, 9, 5, 6, 2];
const uniqueArray = removeDuplicates(array);

console.log("Original Array:", array);
console.log("Array with Unique Elements:", uniqueArray);
