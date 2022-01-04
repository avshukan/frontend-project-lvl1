import game, { challengesCount } from '../src/index.js';
import random from '../src/random.js';

const maxValue = 10000;

const isPrime = (n) => {
  if (n === 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const generator = (count) => {
  const result = [];
  for (let i = 0; i < count; i += 1) {
    const question = random(maxValue);
    const correctAnswer = isPrime(question) ? 'yes' : 'no';
    result.push({ question, correctAnswer });
  }
  return result;
};

export default () => game(generator(challengesCount));
