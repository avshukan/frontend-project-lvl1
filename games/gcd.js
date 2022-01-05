import game, { challengesCount } from '../src/index.js';
import random from '../src/random.js';

const maxValue = 100;
const description = 'Find the greatest common divisor of given numbers.';

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

const generator = (count) => {
  const result = [];
  for (let i = 0; i < count; i += 1) {
    const a = random(maxValue);
    const b = random(maxValue);
    const question = `${a} ${b}`;
    const correctAnswer = (gcd(a, b)).toString();
    result.push({ question, correctAnswer });
  }
  return result;
};

export default () => game(description, generator(challengesCount));
