const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const minimumValue = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minimumValue]) {
        minimumValue = j;
      }
    }
  }

  return arr;
};

console.log(selectionSort([9, 2, 5, 7, 1, 3, 6]));
