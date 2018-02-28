const formattedTime = (n) => {
  const hour = Math.floor(n / 60);
  const min = n % 60;
  const hourResult = hour < 10 ? `0${hour}` : `${hour}`;
  const minResult = min < 10 ? `0${min}` : `${min}`;
  return `${hourResult}:${minResult}`;
};
export default formattedTime;