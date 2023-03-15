// Given a sorted aray of 'n' elements and target element 't', find the index of 't' in the array. Return -1 if the target element is not found.

function binarySearch(arr, target){
    let leftIndex = 0;
    let rightIndex = arr.length-1;

    while(leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex+rightIndex)/2)
        if(target === arr[middleIndex]){
            return middleIndex;
        }
        if(target < arr[middleIndex]){
            rightIndex = middleIndex -1;
        } else {
            leftIndex = middleIndex+1;
        }
    }
    return -1
}


console.log(binarySearch([-5,2,4,6,10],10))
console.log(binarySearch([-5,2,4,6,10],6))
console.log(binarySearch([-5,2,4,6,10],20))

// Big-o = o(log n) - input is reduced by half