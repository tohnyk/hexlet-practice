import { length } from './strings'; // eslint-disable-line

// BEGIN (write your solution here)
const reverseInt = (n) => {
  const str = String(n);
  let result = '';
  if (str[0] === '-') {
    result += str[0];
  }
  for (let i = length(str) - 1; i >= 0 && str[i] !== '-'; i -= 1) {
    result += str[i];
  }
  return Number(result);
};
export default reverseInt;
// END
