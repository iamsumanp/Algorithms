const merge = (arr, left, middle, right) => {
  let i = left; // from 0
  let j = middle + 1; //from middle + 1 for right sucopyArrayArray
  let k = left; //for new array : copyArray ? k is the index
  let copyArray = [];
  while (i <= middle && j <= right) {
    if (arr[i] < arr[j]) {
      copyArray[k] = arr[i];
      i++;
    } else {
      copyArray[k] = arr[j];
      j++;
    }
    k++;
  }

  //now for the exhausted sucopyArrayArray

  if (i > middle) {
    while (j <= right) {
      copyArray[k] = arr[j];
      k++;
      j++;
    }
  } else {
    while (i <= middle) {
      copyArray[k] = arr[i];
      k++;
      i++;
    }
  }

  //now copy everthing to arr

  for (let k = left; k <= right; k++) {
    arr[k] = copyArray[k];
  }
  return arr;
  // console.log(arr);
};

//for sorting two divided subArrays :

const mergeSort = (arr, left, right) => {
  if (left < right) {
    let middle = Math.floor((left + right) / 2);
    mergeSort(arr, left, middle);
    mergeSort(arr, middle + 1, right);

    return merge(arr, left, middle, right);
  }
};

let arr = [6, 3, 5, 9, 2, 8, 7, 1];

let arr_size = arr.length;

console.log(mergeSort(arr, 0, arr.length - 1)); //passed arr.length - 1 because array is 0 indexed and we have to perform actions using index in function above
