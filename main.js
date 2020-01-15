function shifted_binary_search(arr,target){
  // how might we figure out the rotation index?
  // split up the problem, depending on the number at the rotation index
  // find the point where the values drop off 
  // walk through the array, check each value and its next value  uf we see that next value < than current value then we've found th rotation index
  // we have two sorted halves we can run two seeparate binary searces on each sorted half
  // find the rotation point
  // run two seeparate binary searches on each half
  let dropoff = 0
  let arr2 = []
  let temp = []
  let temp2 = []
  for(i= 0; i < arr.length; i++){
    if(arr[i] > arr[i + 1] ){
      dropoff = i + 1
      temp = arr.slice(dropoff,arr.length)
      temp2 = arr.slice(0,dropoff)
    }
  }
  if(temp2[0] <= target <= temp2[temp2.length - 1]){
    for(i = 0; i< temp2.length; i++){
      if(temp2[i] == target){
        return i
      }
    }
  }if(temp[0] <= target <= temp[temp2.length - 1]){
    for(i = 0; i< temp.length; i++){
      if(temp[i] === target){
        return i + temp2.length
      }
  }
  return -1
}
