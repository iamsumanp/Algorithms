const sumUpTo = (n) => {
  return (n * (n + 1)) / 2;
};

console.log("first", sumUpTo(1000000));

const sumDifferentPattern = (n) => {
  let numer = 0;
  for (let i = 0; i <= n; i++) {
    numer = numer + i;
  }

  return numer;
};
console.log("second", sumDifferentPattern(1000000));
