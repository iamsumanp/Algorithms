const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minimumValue = i; //current index but this changes as for loop below find smaller elements

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minimumValue]) {
        //  when right side element is smaller than current minimum value
        minimumValue = j; //  new minimum value index
      }
    }

    //as you see at line 3 minvalue and i are same so when they are different start swapping

    if (minimumValue != i) {
      let tempValue = arr[i]; // storing index value in temporary varaible
      arr[i] = arr[minimumValue]; // copying minimum value to current index
      arr[minimumValue] = tempValue; //and lastly copying in minimumValue index the stored value
    }
  }

  return arr;
};

console.log(selectionSort([9, 2, 5, 7, 1, 3, 6]));
