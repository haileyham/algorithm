// O(n) operation inside of an O(n) operation.
// O(n * n) O(n  )
function printAllPairs(n) {
  for (var i = 0; i < n; i++) { // O(n)
    for (var j = 0; j < n; j++) { // O(n)
      console.log(i, j);
    }
  }
}