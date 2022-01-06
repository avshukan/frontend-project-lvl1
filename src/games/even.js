import game from '../index.js';
import random from '../utils/random.js';
import isEven from '../utils/isEven.js';

const maxValue = 10000;
const description = "Answer 'yes' if number even otherwise answer 'no'.";

const generator = () => {
  const question = random(maxValue);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => game(description, generator);
