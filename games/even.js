import game, { challengesCount } from '../src/index.js';
import random from '../src/random.js';

const maxValue = 10000;

const generator = (count) => {
  const result = [];
  for (let i = 0; i < count; i += 1) {
    const question = random(maxValue);
    const correctAnswer = (question % 2 === 0) ? 'yes' : 'no';
    result.push({ question, correctAnswer });
  }
  return result;
};

export default () => game(generator(challengesCount));
