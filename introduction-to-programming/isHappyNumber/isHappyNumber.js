import { length } from './strings'; // eslint-disable-line

const sumOfSquareDigits = (num) => {
  const numAsStr = String(num);
  let sum = 0;
  for (let i = 0; i < length(numAsStr); i += 1) {
    const digit = Number(numAsStr[i]);
    sum += digit * digit;
  }
  return sum;
};

// BEGIN (write your solution here)
const isHappyNumber = (int) => {
  let result = int;
  for (let i = 0; i < 10; i += 1) {
    result = sumOfSquareDigits(result);
    if (result === 1) {
      return true;
    }
  }
  return false;
};
export default isHappyNumber;
// END
