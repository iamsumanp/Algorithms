const sumUpTo = (n) => {
  return (n * (n + 1)) / 2; //this only runs once since there is no loop and no conditions
};

console.log("first", sumUpTo(1000000));

const sumDifferentPattern = (n) => {
  let numer = 0;
  for (let i = 0; i <= n; i++) {
    //since the n  is 1 million so the for loop also shound run 1 million times
    numer = numer + i;
  }

  return numer;
};
console.log("second", sumDifferentPattern(1000000));
