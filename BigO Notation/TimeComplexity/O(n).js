// Number of operations is (eventually) bounded by a multiple of n (say, 10n)
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

// Number of operations is (eventually) bounded by a multiple of n (say, 10n)
function countUpAndDown(n) {
  console.log("Going up!");
  for (let i = 0; i < n; i++) { // O(n)
    console.log(i);
  }
  console.log("At the top!\nGoing down...");
  for (let j = n - 1; j >= 0; j--) { // O(n)
    console.log(j);
  }
  console.log("Back down. Bye!");
}

// O(n)
function logAtLeast5(n) {
  for (var i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}

// O(1)
// function logAtMost5(n) {
//   for (var i = 1; i <= Math.min(5, n); i++) {
//     console.log(i);
//   }
// }