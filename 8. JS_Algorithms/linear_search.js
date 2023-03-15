
// Given an array of n elements, find a targe
function lineaSearch(arr, target) {
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] === target) { 
            return i;
        }
    } return -1;
}

console.log(lineaSearch([-5, 2,10, 4, 6],4))


// Big-o = o(n)

