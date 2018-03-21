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

// Grr. Asynchronicity! forEach method won't work.

// Oh my god. You can't be serious. Nesting of callbacks.

// So you're saying I need a PhD in CS theory to write a loop in
// JavaScript? recursive trampoline approach.

// Better? Series of promises.

// There is a god, and they want us to be happy. Async functions.
