const sumUpTo = (n) => {
  return (n * (n + 1)) / 2;
};

console.log(sumUpTo(10));

const sumDifferentPattern = (n) => {
  let numer = 0;
  for (let i = 0; i <= n; i++) {
    numer++;
  }

  return numer;
};
console.log(sumDifferentPattern(10));
