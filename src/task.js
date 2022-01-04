import readlineSync from 'readline-sync';

export default ({ question, correctAnswer }) => {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  const result = correctAnswer === answer;
  if (result) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  }
  return result;
};
