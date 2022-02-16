// ? const sameArrayO = (arr) => {
//  ? for (let i = 0; i < arr.length; i++) {
//   ?  for (let j = 0; j < arr.length; j++) {
//   ?    console.log(arr[i]);
//   ?  }
//  ?  }
// ? };

// ? sameArrayO(["abc", "def", "ghi"]);

const withDifferentArray = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    // * run 3 times
    for (let j = 0; j < arr2.length; j++) {
      // . 3
      console.log(arr1[j] + " lul " + arr2[j]);
    }
  }
};

withDifferentArray(["a", "b", "c"], ["d", "e", "f"]);

let aarr = [1, 3, 4, 5, 6];
console.log("test array-1", aarr.length - 1);
