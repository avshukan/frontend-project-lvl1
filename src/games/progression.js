import game from '../index.js';
import random from '../utils/random.js';

const maxLength = 15;
const minLength = 5;
const maxStart = 100;
const minStart = -100;
const maxStep = 10;
const minStep = -10;
const description = 'What number is missing in this progression?';

const generator = () => {
  const length = random(maxLength, minLength);
  const start = random(maxStart, minStart);
  const step = random(maxStep, minStep);
  const array = [...Array(length).keys()].map((item) => start + item * step);
  const key = random(length - 1);
  const question = array.map((value, index) => ((index === key) ? '..' : value)).join(' ');
  const correctAnswer = array[key].toString();
  return { question, correctAnswer };
};

export default () => game(description, generator);
