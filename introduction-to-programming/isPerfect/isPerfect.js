const isPerfect = (n) => {
  if (n <= 0) {
    return false;
  }
  let dividerSum = 0;
  for (let i = 0; i < n; i += 1) {
    dividerSum += n % i === 0 ? i : 0;
  }
  return n === dividerSum;
};
