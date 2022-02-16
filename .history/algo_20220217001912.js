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

  while (i <= middle && j <= right) {
    if (arr[i] < arr[j]) {
      b[k] = a[i];
      i++;
    } else {
      b[k] = a[j];
      j++;
    }
  }

  //now for the exhausted subArray

  if (i > middle) {
    while (j <= r) {
      b[k] = a[j];
      k++;
      j++;
    }
  } else {
    while (i <= middle) {
      b[k] = a[i];
      k++;
      i++;
    }
  }
};

const mergeSort = (arr, left, right) => {
  if (left < right) {
    let middle = left + parseInt((right - left) / 2);
    mergeSort(arr, left, middle);
    mergeSort(arr, middle + 1, right);

    merge(arr, left, middle, right);
  }
};

let arr = [6, 3, 5, 9, 2, 8, 7, 1];

let arr_size = arr.length;

mergeSort(arr, 0, arr.length - 1);
