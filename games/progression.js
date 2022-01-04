import game, { challengesCount } from '../src/index.js';
import random from '../src/random.js';

const maxLength = 15;
const minLength = 5;
const maxStart = 100;
const minStart = -100;
const maxStep = 10;
const minStep = -10;

const generator = (count) => {
  const result = [];
  for (let i = 0; i < count; i += 1) {
    const length = random(maxLength, minLength);
    const start = random(maxStart, minStart);
    const step = random(maxStep, minStep);
    const array = [...Array(length).keys()].map((item) => start + item * step);
    const key = random(length - 1);
    const question = array.map((value, index) => ((index === key) ? '..' : value)).join(' ');
    const correctAnswer = array[key].toString();
    result.push({ question, correctAnswer });
  }
  return result;
};

export default () => game(generator(challengesCount));
