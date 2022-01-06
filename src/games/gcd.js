import game from '../index.js';
import random from '../utils/random.js';
import gcd from '../utils/gcd.js';

const minValue = 2;
const maxValue = 100;
const description = 'Find the greatest common divisor of given numbers.';

const generator = () => {
  const a = random(minValue, maxValue);
  const b = random(minValue, maxValue);
  const question = `${a} ${b}`;
  const correctAnswer = (gcd(a, b)).toString();
  return { question, correctAnswer };
};

export default () => game(description, generator);
