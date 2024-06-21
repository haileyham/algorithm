function sumZeroAllPairs(arr) {
  let left = 0;
  let right = arr.length - 1;
  const result = [];

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === 0) {
      result.push([arr[left], arr[right]]);
      left++;
      right--;
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }

  return result.length > 0 ? result : undefined;
}

// Testing the function with the provided array
console.log(sumZeroAllPairs([-3, -2, -1, 0, 1, 2, 3])); // [[-3, 3], [-2, 2], [-1, 1]]
