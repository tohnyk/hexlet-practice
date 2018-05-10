import { l, isEmpty, head, tail, cons, reverse, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line

// BEGIN (write your solution here)
const zip = (list1, list2) => { // teacher's iteration solution
  const iter = (first, last, acc) => {
    if (isEmpty(first) || isEmpty(last)) {
      return acc;
    }

    const newAcc = cons(l(head(first), head(last)), acc);
    return iter(tail(first), tail(last), newAcc);
  };

  return reverse(iter(list1, list2, l()));
};

export default zip;
// END

