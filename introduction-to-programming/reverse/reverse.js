import { length, substr } from './strings'; // eslint-disable-line

const reverse = (str) => {
  if (length(str) === 0) {
    return str;
  }
  return str[length(str) - 1] + reverse(substr(str, 0, length(str) - 1));
};
export default reverse;
