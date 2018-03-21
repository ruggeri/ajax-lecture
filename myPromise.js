const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class MyPromise {
  constructor() {
    this.onSuccess = (response) => {};
    this.onFailure = (response) => {};
  }

  then(onSuccess, onFailure) {
    const subsequentPromise = new MyPromise();

    this.onSuccess = (result) => {
      const theirResult = onSuccess(result);

      if (theirResult instanceof MyPromise) {
        theirResult.onSuccess = (theirFinalResult) => {
          subsequentPromise.registerSuccess(theirFinalResult);
        }
      } else {
        subsequentPromise.registerSuccess(theirResult);
      }
    }
    this.onFailure = onFailure || this.onFailure;

    return subsequentPromise;
  }

  registerFailure(error) {
    this.onFailure(error);
  }

  registerSuccess(result) {
    this.onSuccess(result);
  }
}

function askQuestion(question) {
  const myPromise = new Promise((resolve, reject) => {
    reader.question(question, (response) => {
      if (response !== '') {
        resolve(response);
      } else {
        reject('no response given');
      }
    });
  });
  return myPromise;
}

module.exports = {
  closeReader: () => { reader.close() },
  askQuestion: askQuestion,
};
