const sumUpTo = (n) => {
  return (n * (n + 1)) / 2;
};

console.log(sumUpTo());

const sumDifferentPattern = (n) => {
  let numer = 0;
  for (let i = 0; i <= n; i++) {
    numer = numer + i;
  }

  return numer;
};
console.log(sumDifferentPattern(1000000));
