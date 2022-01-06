import game from '../index.js';
import random from '../utils/random.js';
import arithmeticOperation from '../utils/arithmeticOperation.js';

const operators = ['+', '-', '*'];
const maxValue = 100;
const description = 'What is the result of the expression?';

const generator = () => {
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const a = random(maxValue);
  const b = random(maxValue);
  const question = `${a} ${operator} ${b}`;
  const correctAnswer = arithmeticOperation(operator, a, b);
  return { question, correctAnswer: correctAnswer.toString() };
};

export default () => game(description, generator);
