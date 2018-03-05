// BEGIN (write your solution here) (write your solution here)
const isPerfect = (num) => {
  const iter = (counter, acc) => {
    if (counter > num / 2) {
      return acc;
    }
    const newAcc = num % counter === 0 ? acc + counter : acc;
    return iter(counter + 1, newAcc);
  };
  return iter(1, 0) === num && num !== 0;
};
  // END

export default isPerfect;
