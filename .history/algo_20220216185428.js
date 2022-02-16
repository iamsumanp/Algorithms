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

const testMergeSort = (arr, left, right) => {
  if (left < right) {
    const middle = Math.floor(left + (right - left / 2));
    console.log("hello", middle);
  }
  console.log(arr, left, right);
};
testMergeSort(testArr, 0, testArr_size - 1);
