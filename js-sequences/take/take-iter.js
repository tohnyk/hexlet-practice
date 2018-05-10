// eslint-disable-next-line
import { l, isEmpty, head, tail, cons, toString as listToString } from 'hexlet-pairs-data';

// BEGIN (write your solution here)
export default (n, list) => { // iteration
  const iter = (counter, elements, acc) => {
    if (counter === 0 || isEmpty(elements)) return acc;
    return cons(head(elements), iter(counter - 1, tail(elements), acc));
  };
  return iter(n, list, l());
};
// END
