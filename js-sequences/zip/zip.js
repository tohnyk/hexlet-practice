import { l, isEmpty, head, tail, cons, reverse, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line

// BEGIN (write your solution here)
const zip = (list1, list2) => {
  if (isEmpty(list1) || isEmpty(list2)) return l();
  const pairList = l(head(list1), head(list2));
  return cons(pairList, zip(tail(list1), tail(list2)));
};

export default zip;
// END
