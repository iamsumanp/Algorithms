const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i]; //storing the value of current index so it wont be lost

    let j = i - 1; // using j variable to compare the index element with left side elements if  they are smaller of greater than the comparing vlaue

    //check j doesnot got below 1 and left side element  should  always be greater than current index element
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j]; // store the left elment to our current index array replacing the smaller element

      j--; //check all the left side  with the curren element until arr[j] > current and j is not less than 0
    }

    arr[j + 1] = current; // new j value is taken from while loop and store the current element in the right place
  }
  return arr;
};

console.log(insertionSort([5, 3, 6, 8, 1, 2]));
