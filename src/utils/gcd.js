const gcd = (a, b) => {
  let [max, min] = (a > b) ? [a, b] : [b, a];
  while (max % min > 0) {
    [max, min] = [min, max % min];
  }
  return min;
};

export default gcd;
