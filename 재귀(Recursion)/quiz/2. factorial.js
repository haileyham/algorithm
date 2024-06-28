/*
문제

factorial
숫자를 받아 해당 숫자의 계승(팩토리얼)을 반환하는 팩토리얼 함수를 작성하시오.

팩토리얼은 정수와 그 아래의 모든 정수의 곱입니다.

예를 들어, 4 팩토리얼 (4!)은 4 * 3 * 2 * 1 = 2입니다. 팩토리얼 0(0!)은 항상 1입니다.

factorial(1) // 1
factorial(2) // 2
factorial(4) // 24
factorial(7) // 5040

*/

// [1]
function factorial(a) {
  if (a === 0) return 1;
  return a * factorial(a - 1);
}

// [2]
function factorial(x) {
  if (x < 0) return 0;
  if (x <= 1) return 1;
  return x * factorial(x - 1);
}