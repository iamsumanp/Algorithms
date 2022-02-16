const merge = (arr, left, middle, right) => {
  return arr[i];
  // let i = left; // from 0
  // let j = middle + 1; //from middle + 1 for right sucopyArrayArray
  // let k = left; //for new array : copyArray ? k is the index
  // let copyArray = [];
  // while (i <= middle && j <= right) {
  //   if (arr[i] < arr[j]) {
  //     copyArray[k] = arr[i];
  //     i++;
  //   } else {
  //     copyArray[k] = arr[j];
  //     j++;
  //   }
  //   k++;
  // }
  // //now for the exhausted sucopyArrayArray
  // if (i > middle) {
  //   while (j <= right) {
  //     copyArray[k] = arr[j];
  //     k++;
  //     j++;
  //   }
  // } else {
  //   while (i <= middle) {
  //     copyArray[k] = arr[i];
  //     k++;
  //     i++;
  //   }
  // }
  // //now copy everthing to arr
  // for (let k = left; k <= right; k++) {
  //   arr[k] = copyArray[k];
  // }
  // return arr;
};

//for sorting two divided subArrays :

const mergeSort = (arr, left, right) => {
  // run this function recursively until there is only one arrayElement is left // when 1 is left, left and right will be same and will be false
  if (left < right) {
    let middle = Math.floor((left + right) / 2); //find middle element every time while splitting array into subarrays

    mergeSort(arr, left, middle); //for sorting left subArray after the base condition  is false it goes to next line sorting the left subArray // flow of recursion

    mergeSort(arr, middle + 1, right); // for sorting right subArray after base condition is false goes to next line

    return merge(arr, left, middle, right); // passes sorted arrays
  }
};

let arr = [6, 3, 5, 9, 2, 8, 7, 1];

let arr_size = arr.length;

console.log(mergeSort(arr, 0, arr.length - 1)); //passed arr.length - 1 because array is 0 indexed and we have to perform actions using index in function above
