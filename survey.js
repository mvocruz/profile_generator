const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  "What's your name? Nicknames are also acceptable :)",
  'What\'s an activity you like doing?',
  "What do you listen to while doing that?",
  "Which meal is your favourite (eg: dinner, brunch, etc.)",
  "What's your favourite thing to eat for that meal?",
  "Which sport is your absolute favourite?",
  "What is your superpower? In a few words, tell us what you are amazing at!"
];
const answers = [];
let startingNum = 0;

const askQuestions = (array, num) => {
  for (let i = 0; i < questions.length; i++) {
    if (questions[startingNum] ===  questions[questions.length - 1]) {
      rl.question(questions[startingNum], (answer) => {
        answers.push(`Thank you for your valuable feedback: ${answer}`);
        console.log(answers[startingNum]);
        rl.close();
      });
    
    } else {
      rl.question(questions[startingNum], (answer) => {
        answers.push(`Thank you for your valuable feedback: ${answer}`);
        console.log(answers[startingNum]);
        startingNum += 1;
        askQuestions(questions, startingNum);
      });
    }
  }
};

askQuestions(questions, startingNum);
