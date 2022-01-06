const gcd = (a, b) => {
  if (a === b) {
    return a;
  }
  const [max, min] = (a > b) ? [a, b] : [b, a];
  if (max % min === 0) {
    return min;
  }
  return gcd(min, max % min);
};

export default gcd;
