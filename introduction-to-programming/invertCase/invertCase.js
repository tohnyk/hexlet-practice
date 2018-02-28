import { length, toUpperCase, toLowerCase } from './strings'; // eslint-disable-line

export default (str) => {
  let result = '';
  for (let i = 0; i < length(str); i += 1) {
    const toBeUpperCase = str[i] !== toUpperCase(str[i]);
    result += toBeUpperCase ? toUpperCase(str[i]) : toLowerCase(str[i]);
  }
  return result;
};
