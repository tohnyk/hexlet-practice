// BEGIN (write your solution here)
export const cons = (a, b) => ((2 ** a) * (3 ** b));

export const car = (f) => {
  const iter = (counter, acc) => {
    if ((counter % 2) !== 0) {
      return acc;
    }
    return iter(counter / 2, acc + 1);
  };
  return iter(f, 0);
};

export const cdr = (f) => {
  const iter = (counter, acc) => {
    if ((counter % 3) !== 0) {
      return acc;
    }
    return iter(counter / 3, acc + 1);
  };
  return iter(f, 0);
};
// END
