const withoutTwoZeros = (zero, one) => {
  if ((zero - one) >= 2) {
    return 0;
  } else if (zero === 0 || one === 0) {
    return 1;
  }
  const factorial = n => (n ? n * factorial(n - 1) : 1);
  const combination = factorial(one + 1) / (factorial(zero) * factorial((one + 1) - zero));
  return combination;
};

export default withoutTwoZeros;
