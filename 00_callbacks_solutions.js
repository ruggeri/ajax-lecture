const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = [
  'How amazing is Markov?',
  'Is there any cat cuter than Curie?',
  'Who the heck is Sennacy?',
];

// Grr. Asynchronicity!

/*
questions.forEach((q) => {
  // Won't work!!!
  reader.question(q, (answer) => {
    console.log(`You answered ${answer}.`);
  });
});
*/

// Oh my god. You can't be serious.

/*
reader.question(questions[0], (answer) => {
  console.log(`You answered ${answer}.`);
  reader.question(questions[1], (answer) => {
    console.log(`You answered ${answer}.`);
    reader.question(questions[2], (answer) => {
      console.log(`You answered ${answer}.`);

      reader.close();
    });
  });
});
*/

// So you're saying I need a PhD in CS theory to write a loop in
// JavaScript?

/*
function questionTrampoline(questions, questionIndex) {
  if (questionIndex === questions.length) {
    reader.close();
    return;
  }

  reader.question(questions[questionIndex], (answer) => {
    console.log(`You answered ${answer}.`);
    questionTrampoline(questions, questionIndex + 1);
  });
}

questionTrampoline(questions, 0);
*/

// Better?

/*
function questionPromisified(question) {
  return new Promise((resolve, reject) => {
    reader.question(question, (answer) => resolve(answer));
  });
}

questionPromisified(questions[0])
  .then((answer) => {
    console.log(`You said ${answer}.`);

    return questionPromisified(questions[1]);
  }).then((answer) => {
    console.log(`You said ${answer}.`);

    return questionPromisified(questions[2]);
  }).then((answer) => {
    console.log(`You said ${answer}.`);

    reader.close();
  }).catch((error) => {
    console.log('A bad thing happened.');
    console.log(error);

    reader.close();
  });
*/

// There is a god, and they want us to be happy.

function questionPromisified(question) {
  return new Promise((resolve, reject) => {
    reader.question(question, (answer) => resolve(answer));
  });
}

async function askQuestions(questions) {
  for (const question of questions) {
    const answer = await questionPromisified(question);
    console.log(`You said ${answer}.`);
  }
}

askQuestions(questions).then(() => {
    reader.close();
  }).catch((err) => {
    console.log('A bad thing happened.');
    console.log(err);
  });
