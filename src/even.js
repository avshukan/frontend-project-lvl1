import readlineSync from 'readline-sync';

const task = () => {
  const question = Math.floor(Math.random() * 100) + 1;
  console.log(`Question: '${question}'`);
  const correctAnswer = (question % 2 === 0) ? 'yes' : 'no';
  const answer = readlineSync.question('Your answer: ');
  const result = correctAnswer === answer;
  if (result) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  }
  return result;
};

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  let pointsCouner = 0;
  while (pointsCouner < 3) {
    const result = task();
    if (!result) {
      console.log(`Let's try again, ${name}!`);
      return;
    }
    pointsCouner += 1;
  }
  console.log(`Congratulations, ${name}!`);
};
