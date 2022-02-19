const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minimumValue = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minimumValue]) {
        minimumValue = j;
      }
    }
    if (minimumValue != i) {
      let tempValue = arr[minimumValue];
      arr[i] = arr[minimumValue];
      arr[minimumValue] = tempValue;
    }
  }

  return arr;
};

console.log(selectionSort([9, 2, 5, 7, 1, 3, 6]));
