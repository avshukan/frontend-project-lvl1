import game, { roundsCount } from '../index.js';
import random from '../utils/random.js';

const minValue = 1;
const maxValue = 10000;
const description = "Answer 'yes' if number even otherwise answer 'no'.";

const isEven = (n) => (n % 2 === 0);

const makeRound = () => {
  const question = random(minValue, maxValue);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const makeRounds = (n) => [...Array(n).keys()].map(makeRound);

export default () => game(description, makeRounds(roundsCount));
