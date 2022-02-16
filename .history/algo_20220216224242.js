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
// const merge = (arr, left, middle, right) => {
//   console.log("mergefn", arr, left, middle, right);
// };
function merge(arr, l, m, r) {
  var n1 = m - l + 1;
  var n2 = r - m;

  // Create temp arrays
  var L = new Array(n1);
  var R = new Array(n2);

  // Copy data to temp arrays L[] and R[]
  for (var i = 0; i < n1; i++) L[i] = arr[l + i];
  for (var j = 0; j < n2; j++) R[j] = arr[m + 1 + j];

  // Merge the temp arrays back into arr[l..r]

  // Initial index of first subarray
  var i = 0;

  // Initial index of second subarray
  var j = 0;

  // Initial index of merged subarray
  var k = l;

  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }

  // Copy the remaining elements of
  // L[], if there are any
  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }

  // Copy the remaining elements of
  // R[], if there are any
  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
  }
  console.log(L, R);
}
const testMergeSort = (arr, left, right) => {
  // console.log("arr", arr);

  if (left < right) {
    // let middle = Math.floor(left + right / 2);
    let middle = left + parseInt((right - left) / 2);
    // console.log("middlenumber", middle);
    testMergeSort(arr, left, middle);
    testMergeSort(arr, middle + 1, right);
    // console.log("left to middle", arr, middle);
    // console.log("middle to right", arr, middle);
    merge(arr, left, middle, right);
  }
  // console.log(arr, left, right);
};
testMergeSort(testArr, 0, testArr_size - 1);
