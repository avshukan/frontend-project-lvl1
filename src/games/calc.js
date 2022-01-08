import game, { roundsCount } from '../index.js';
import random from '../utils/random.js';

const operators = ['+', '-', '*'];
const minValue = -100;
const maxValue = 100;
const description = 'What is the result of the expression?';

const arithmeticOperation = (operator, operand1, operand2) => {
  if (operator === '+') {
    return operand1 + operand2;
  }
  if (operator === '-') {
    return operand1 - operand2;
  }
  if (operator === '*') {
    return operand1 * operand2;
  }
  return NaN;
};

const makeRound = () => {
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const a = random(minValue, maxValue);
  const b = random(minValue, maxValue);
  const question = `${a} ${operator} ${b}`;
  const correctAnswer = arithmeticOperation(operator, a, b);
  return [question, correctAnswer.toString()];
};

const makeRounds = (n) => [...Array(n).keys()].map(makeRound);

export default () => game(description, makeRounds(roundsCount));
