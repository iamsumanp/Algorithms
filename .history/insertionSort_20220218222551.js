const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    j = i - 1;
    arr[j + 1] = arr[j];
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current; //arr[-1+1] = 0
  }
};

console.log(insertionSort([5, 3, 6, 8, 1, 2]));

[5, 3, 6, 8, 8, 2][(5, 3, 6, 6, 8, 2)][(5, 3, 3, 6, 8, 2)][(5, 5, 3, 6, 8, 2)]; //with current value 1
// [5,5,3,6,8,2]
