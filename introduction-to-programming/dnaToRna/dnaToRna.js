import { length } from './strings';// eslint-disable-line

// BEGIN (write your solution here)
const dnaToRna = (str) => {
  let result = '';
  if (str === '') {
    return '';
  }
  for (let i = 0; i < length(str); i += 1) {
    if (str[i] === 'G') {
      result += 'C';
    } else if (str[i] === 'C') {
      result += 'G';
    } else if (str[i] === 'T') {
      result += 'A';
    } else if (str[i] === 'A') {
      result += 'U';
    } else return null;
  }
  return result;
};
export default dnaToRna;
// END
