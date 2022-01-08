import game, { roundsCount } from '../index.js';
import random from '../utils/random.js';

const maxLength = 15;
const minLength = 5;
const maxStart = 100;
const minStart = -100;
const maxStep = 10;
const minStep = -10;
const description = 'What number is missing in this progression?';

const makeRound = () => {
  const length = random(minLength, maxLength);
  const start = random(minStart, maxStart);
  const step = random(minStep, maxStep);
  const array = [...Array(length).keys()].map((item) => start + item * step);
  const key = random(0, length - 1);
  const question = array.map((value, index) => ((index === key) ? '..' : value)).join(' ');
  const correctAnswer = array[key].toString();
  return [question, correctAnswer];
};

const makeRounds = (n) => [...Array(n).keys()].map(makeRound);

export default () => game(description, makeRounds(roundsCount));
