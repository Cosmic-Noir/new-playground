// console.log("The code has started.");
// const duration = Math.floor(Math.random() * 5000);
// setTimeout(() => {
//   console.log(`Hey! I waited ${duration} milliseconds!`);
// }, duration);
// console.log("This is the last statement in the file.");

// function doTask(name) {
//   console.log(`${name} has started`);
//   const duration = Math.floor(Math.random() * 5000);
//   setTimeout(() => {
//     console.log(`${name} has ended after ${duration} milliseconds`);
//   }, duration);
// }

// doTask("A");
// doTask("B");
// doTask("C");
// doTask("D");
// doTask("E");
// doTask("F");

// const p1 = new Promise((resolve, reject) => {
//   console.log("Running the asynchronous code here");
//   const duration = Math.floor(Math.random() * 5000);
//   setTimeout(() => {
//     console.log("About to resolve");
//     resolve(); // success
//   }, duration);
// });

// p1.then(() => {
//   console.log("The promise completed sucessfully");
// });

// const p1 = new Promise((resolve, reject) => {
//   console.log("Running the asynchronous code here");
//   const duration = Math.floor(Math.random() * 5000);
//   setTimeout(() => {
//     console.log("About to fail");
//     reject(); //fail!
//   }, duration);
// });

// p1.then(() => {
//   console.log("The promise completed successfully");
// }).catch(() => {
//   console.log("The promise has failed.");
// });
// const p1 = new Promise((resolve, reject) => {
//   console.log("Running the asynchronous code here");
//   const duration = Math.floor(Math.random() * 5000);
//   setTimeout(() => {
//     console.log("About to fail");
//     reject("Error 42: Life has no meaning"); // fail with a message
//   }, duration);
// });

// p1.then(() => {
//   console.log("The promise completed successfully");
// }).catch(err => {
//   //notice the err parameter here
//   console.log("The promise has failed with the following message:");
//   console.log(err);
// });

// const p1 = new Promise((resolve, reject) => {
//   console.log("Running the asynchronous code here");
//   const duration = Math.floor(Math.random() * 5000);
//   setTimeout(() => {
//     console.log("About to resolve");
//     resolve(42); //succeed with a value
//   }, duration);
// });

// p1.then(value => {
//   //notice the value parameter here
//   console.log("The promise completed successfully with the following value:");
//   console.log(value);
// }).catch(err => {
//   console.log("The promise has failed with the following message:");
//   console.log(err);
// });

function doTask(name) {
  const p = new Promise((resolve, reject) => {
    console.log(`${name} has started`);
    const duration = Math.floor(Math.random() * 5000);
    setTimeout(() => {
      resolve(`${name} has ended after ${duration} milliseconds`);
    }, duration);
  });
  return p;
}

// const p2 = doTask("A");
// console.log(p2);

doTask("A").then(result => {
  console.log(result);
});

doTask("B")
  .then(result => {
    console.log(result);
    return doTask("C");
  })
  .then(result => {
    console.log(result);
  });

doTask("D").then(result => {
  console.log(result);
});

doTask("E").then(result => {
  console.log(result);
});

doTask("F").then(result => {
  console.log(result);
});
