// run `node index.js` in the terminal

// Example asynchronous tasks
function asyncTask1() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      // Resolve the Promise with a value
      resolve('Async Task 1 completed');
    }, 2000);
  });
}

function asyncTask2() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      // Reject the Promise with an error
      reject(new Error('Async Task 2 failed'));
    }, 3000);
  });
}

function asyncTask3() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      // Resolve the Promise with a value
      resolve('Async Task 3 completed');
    }, 1500);
  });
}
