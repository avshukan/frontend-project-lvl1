import game, { roundsCount } from '../index.js';
import random from '../utils/random.js';

const minValue = 2;
const maxValue = 100;
const description = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  let [max, min] = (a > b) ? [a, b] : [b, a];
  while (max % min > 0) {
    [max, min] = [min, max % min];
  }
  return min;
};

const makeRound = () => {
  const a = random(minValue, maxValue);
  const b = random(minValue, maxValue);
  return [`${a} ${b}`, (gcd(a, b)).toString()];
};

const makeRounds = (n) => [...Array(n).keys()].map(makeRound);

export default () => game(description, makeRounds(roundsCount));
