const sameArrayO = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i]);
    }
  }
};

console.log(sameArrayO(["abc", "def", "ghi"]));
