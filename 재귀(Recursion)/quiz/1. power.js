/*
문제
power
밑과 지수를 받아들이는 power라는 함수를 작성합니다. 이 함수는 밑의 거듭제곱을 지수로 반환해야 합니다. 이 함수는 Math.pow()의 기능을 모방해야 합니다. 음의 밑과 지수에 대해서는 신경쓰지 마세요.

power(2,0) // 1
power(2,2) // 4
power(2,4) // 16

 */

function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

/*
2 * power(2, 3)
2 * power(2, 2)
2 * power(2, 1)
2 * power(2, 0)
이 순서대로 진행되고
exponent가 0일 때는 1이 return 되기 때문에 거기서부터 다시 계산
2 * 1 (= power(2,0)) // 2
2 * 2 (= power(2,1)) // 4
2 * 4 (= power(2,2)) // 8
2 * 8 (= power(2,3)) // 16
*/