import readlineSync from 'readline-sync';

const task = ({ question, correctAnswer }) => {
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

export default (challenges) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  for (let pointsCounter = 0; pointsCounter < challenges.length; pointsCounter += 1) {
    const challenge = challenges[pointsCounter];
    const result = task(challenge);
    if (!result) {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
