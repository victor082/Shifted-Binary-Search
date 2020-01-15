function shifted_binary_search(arr,target){
  
  //   PSEUDO CODE
  // how might we figure out the rotation index?
  // split up the problem, depending on the number at the rotation index
  // find the point where the values drop off 
  // walk through the array, check each value and its next value  uf we see that next value < than current value then we've found th rotation index
  // we have two sorted halves we can run two seeparate binary searces on each sorted half
  // find the rotation point
  // run two seeparate binary searches on each half
  
let dropoff = 0
// dropoff is the number right after it gets shifted

let firstArray = []
// first array will represent the first half of the array, after getting shifted

let secondArray = []
// second half of the array after gettting shifted

for (i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
        dropoff = i + 1
        secondArray = arr.slice(dropoff, arr.length)
        firstArray = arr.slice(0, dropoff)
    }
}
// Edge case of checking if the target is within the first array
if (firstArray[0] <= target <= firstArray[firstArray.length - 1]) {
    for (i = 0; i < firstArray.length; i++) {
        if (firstArray[i] == target) {
            return i
        }
    }
    return -1
}
// Edge case of checking if the target is within the second array
if (secondArray[0] <= target <= secondArray[firstArray.length - 1]) {
    for (i = 0; i < secondArray.length; i++) {
        if (secondArray[i] === target) {
            return i + firstArray.length
        }
    }
    return -1
}
