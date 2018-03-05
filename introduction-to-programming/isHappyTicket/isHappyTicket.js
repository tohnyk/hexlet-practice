import { length, substr } from './strings'; // eslint-disable-line

// BEGIN (write your solution here)
const sum = (numStr) => {
  let result = 0;
  for (let i = 0; i < length(numStr); i += 1) {
    result += Number(numStr[i]);
  }
  return result;
};

const isHappyTicket = (num) => {
  const firstHalf = substr(String(num), 0, 3);
  const secondHalf = substr(String(num), 3, 3);
  return sum(firstHalf) === sum(secondHalf);
};

export default isHappyTicket;
// END
