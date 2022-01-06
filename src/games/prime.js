import game from '../index.js';
import random from '../utils/random.js';
import isPrime from '../utils/isPrime.js';

const minValue = 1;
const maxValue = 10000;
const description = "Answer 'yes' if given number is prime. Otherwise answer 'no'.";

const generator = () => {
  const question = random(minValue, maxValue);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => game(description, generator);
