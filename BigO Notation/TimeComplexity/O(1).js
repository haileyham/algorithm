// Always 3 operations
// O(1)
function addUpTo(n) {
  return n * (n + 1) / 2;
}

// O(1)
function logAtMost5(n) {
  for (var i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}

// O(n)
// function logAtLeast5(n) {
//   for (var i = 1; i <= Math.max(5, n); i++) {
//     console.log(i);
//   }
// }