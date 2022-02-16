// ? const sameArrayO = (arr) => {
//  ? for (let i = 0; i < arr.length; i++) {
//   ?  for (let j = 0; j < arr.length; j++) {
//   ?    console.log(arr[i]);
//   ?  }
//  ?  }
// ? };

// ? sameArrayO(["abc", "def", "ghi"]);

//alright time to test mergeSort

const merge = (arr, left, middle, right) => {
  let i = left; // from 0
  let j = middle + 1; //from middle + 1 for right subArray
  let k = left; //for new array : copyArray ? k is the index
  let b = [];
  while (i <= middle && j <= right) {
    if (arr[i] < arr[j]) {
      b[k] = arr[i];
      i++;
    } else {
      b[k] = arr[j];
      j++;
    }
    k++;
  }

  //now for the exhausted subArray

  if (i > middle) {
    while (j <= right) {
      b[k] = arr[j];
      k++;
      j++;
    }
  } else {
    while (i <= middle) {
      b[k] = arr[i];
      k++;
      i++;
    }
  }

  //now copy everthing to arr

  for (let k = left; k <= right; k++) {
    arr[k] = b[k];
  }
  // return arr;
  console.log(arr);
};

const mergeSort = (arr, left, right) => {
  if (left < right) {
    let middle = left + parseInt((right - left) / 2);
    mergeSort(arr, left, middle);
    mergeSort(arr, middle + 1, right);

    return merge(arr, left, middle, right);
  }
};

let arr = [6, 3, 5, 9, 2, 8, 7, 1];

let arr_size = arr.length;

console.log(mergeSort(arr, 0, arr.length - 1));
