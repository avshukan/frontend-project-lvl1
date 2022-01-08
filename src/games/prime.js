import game, { roundsCount } from '../index.js';
import random from '../utils/random.js';

const minValue = 1;
const maxValue = 10000;
const description = "Answer 'yes' if given number is prime. Otherwise answer 'no'.";

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

const makeRound = () => {
  const question = random(minValue, maxValue);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const makeRounds = (n) => [...Array(n).keys()].map(makeRound);

export default () => game(description, makeRounds(roundsCount));
