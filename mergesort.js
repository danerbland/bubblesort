function mergeSort(array){

}

function split(array){
  middleIndex = Math.floor(array.length/2)
  let firstHalf = array.slice(0,middleIndex);
  let secondHalf = array.slice(middleIndex, array.length)
  return ([firstHalf, secondHalf])
}

function merge (arr1, arr2){
  let result = []
  while(!(!arr1.length && !arr2.length)){
    if(!arr1.length){
      result.push(arr2.shift())
    } else if(!arr2.length){
      result.push(arr1.shift())
    } else {
      arr1[0] < arr2[0] ? result.push(arr1.shift()) : result.push(arr2.shift())
    }
  }
  return result;
}
