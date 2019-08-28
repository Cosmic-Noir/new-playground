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

const p1 = new Promise((resolve, reject) => {
  console.log("Running the asynchronous code here");
  const duration = Math.floor(Math.random() * 5000);
  setTimeout(() => {
    console.log("About to fail");
    reject(); //fail!
  }, duration);
});

p1.then(() => {
  console.log("The promise completed successfully");
}).catch(() => {
  console.log("The promise has failed.");
});
