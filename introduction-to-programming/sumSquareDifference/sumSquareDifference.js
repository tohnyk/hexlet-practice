const sumSquareDifference = (n) => {
    if (n === 1) {
      return 0;
    }
    let result = 0;
    for (let i = 1; i <= n; i += 1) {
      result += i * ((i * (i - 1)) / 2);
    }
    return 2 * result;
};
export default sumSquareDifference;