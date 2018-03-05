// BEGIN (write your solution here) (write your solution here)
const diff = (alpha, beta) => {
  const absDiff = Math.abs(alpha - beta);
  return absDiff > 180 ? 360 - absDiff : absDiff;
};
// END
export default diff;
