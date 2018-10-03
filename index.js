// Code your solutions in this file
function printBadges(array) {
    for (let n = 0; n < array.length; n++) {
      console.log(`Welcome ${array[n]}! You are employee #${n + 1}.`)
    };
    return array
};

function tailsNeverFails() {
  let coin = Math.random()
  let flips = 0
  // while (coin <= 0.5) {
  //   flips++
  //   // coin = Math.random();
  // };
  return `You got ${flips} tails in a row!`
};
