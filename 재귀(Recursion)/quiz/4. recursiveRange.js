/*
문제

recursiveRange
숫자를 받으면 0부터 함수에 전달된 숫자까지의 모든 숫자를 더하는 recursiveRange라는 함수를 작성하시오.

SAMPLE INPUT/OUTPUT
recursiveRange(6) // 21
recursiveRange(10) // 55 

*/

function recursiveRange(x) {
  if (x === 0) return 0;
  return x + recursiveRange(x - 1);
}