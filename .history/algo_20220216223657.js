// ? const sameArrayO = (arr) => {
//  ? for (let i = 0; i < arr.length; i++) {
//   ?  for (let j = 0; j < arr.length; j++) {
//   ?    console.log(arr[i]);
//   ?  }
//  ?  }
// ? };

// ? sameArrayO(["abc", "def", "ghi"]);

// var aarr = [0, 1, 2, 3, 7];
// // console.log(aarr.length - 1);

// const mergeSort = (arr, left, right) => {
//   console.log(arr, left, right);
//   var m = left + parseInt((right - left) / 2);
//   console.log("m", m);
// };

// var aarrSize = aarr.length;
// mergeSort(aarr, 0, aarrSize - 1);

let testArr = [1, 9, 5, 7, 6, 4];

let testArr_size = testArr.length;
const merge = (arr, left, middle, right) => {
  console.log("mergefn", arr, left, middle, right);
};

const testMergeSort = (arr, left, right) => {
  if (left < right) {
    let middle = Math.floor(left + right / 2);
    console.log("middlenumber", middle);
    testMergeSort(arr, left, middle);
    console.log("arr", arr);
    testMergeSort(arr, middle + 1, right);
    // console.log("left to middle", arr, middle);
    // console.log("middle to right", arr, middle);
    // merge(arr, left, middle, right);
  }
  // console.log(arr, left, right);
};
testMergeSort(testArr, 0, testArr_size - 1);
