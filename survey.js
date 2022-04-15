const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = [
  "What's your name? Nicknames are also acceptable :)",
  "What's an activity you like doing?",
  "What do you listen to while doing that?",
  "Which meal is your favourite (eg: dinner, brunch, etc.)",
  "What's your favourite thing to eat for that meal?",
  "Which sport is your absolute favourite?",
  "What is your superpower? In a few words, tell us what you are amazing at!",
];

let answers = {};

const printObject = (obj) => {
  console.log("\n\n\n\nHere's your profile information:\n\n\n\n")
  for (key in obj) {
    console.log(`${key}:  ${obj[key]}`);
  }
}

rl.question(`${questions[0]}  `, (answer) => {
  answers[questions[0]] = `${answer}`;
  rl.question(`${questions[1]}  `, (answer) => {
    answers[questions[1]] = `${answer}`;
    rl.question(`${questions[2]}  `, (answer) => {
      answers[questions[2]] = `${answer}`;
      rl.question(`${questions[3]}  `, (answer) => {
        answers[questions[3]] = `${answer}`;
        rl.question(`${questions[4]}  `, (answer) => {
          answers[questions[4]] = `${answer}`;
          rl.question(`${questions[5]}  `, (answer) => {
            answers[questions[5]] = `${answer}`;
            rl.question(`${questions[6]}  `, (answer) => {
              answers[questions[6]] = `${answer}`;
              printObject(answers);
              rl.close();
            });
          });
        });
      });
    });
  });
});
