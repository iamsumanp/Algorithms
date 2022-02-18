const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i]; //storing the value of current index so it wont be lost

    let j = i - 1; // using j

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];

      j--;
    }

    arr[j + 1] = current; //arr[-1+1] = 0
  }
  return arr;
};

console.log(insertionSort([5, 3, 6, 8, 1, 2]));
