function bubbleSort(array) {
  let maxLength = array.length;
  while(maxLength > 1){
    for(let i = 0; i < maxLength - 1; i++){
      console.log('comparing i:', i, ' array[i]: ', array[i], ' and array[i+1]: ', array[i+1])
      if(compare(array[i], array[i+1])){
        console.log('swapping')
        swap(i, i+1, array);
      }
    }
    maxLength -= 1;
  }
  return array;
}

function swap(index1, index2, array) {
  let num1 = array[index1];
  array[index1] = array[index2];
  array[index2] = num1;
}

function compare(num1, num2) {
  return num1 > num2;
}
