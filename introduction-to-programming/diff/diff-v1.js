// BEGIN (write your solution here) (write your solution here)
const diff = (alpha, beta) => {
  const alphaComp = alpha < beta ? alpha + 360 : alpha;
  const betaComp = alpha > beta ? beta + 360 : beta;
  const originalDiff = Math.abs(alpha - beta);
  const compDiff = Math.abs(alphaComp - betaComp);
  return originalDiff <= compDiff ? originalDiff : compDiff;
};
// END
export default diff;

