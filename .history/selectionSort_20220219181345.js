const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minimumValue = i; //current index but this changes as for loop below find smaller elements

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minimumValue]) {
        //  when right side element is smaller than current minimum value
        minimumValue = j; //  new minimum value index
      }
    }
    if (minimumValue != i) {
      let tempValue = arr[i];
      arr[i] = arr[minimumValue];
      arr[minimumValue] = tempValue;
    }
  }

  return arr;
};

console.log(selectionSort([9, 2, 5, 7, 1, 3, 6]));
