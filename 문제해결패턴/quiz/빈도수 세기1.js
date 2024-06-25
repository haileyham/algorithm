/**
빈도수 세기 - sameFrequency
sameFrequency라는 함수를 작성하세요. 두 개의 양의 정수가 주어졌을 때, 두 숫자의 자릿수가 같은 빈도를 갖는지 구합니다.



여러분의 솔루션은 반드시 다음과 같은 복잡성을 가져야 합니다.:

Time: O(N)

예시 인풋:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false

 */

function sameFrequency(a, b) {
  const aa = a.toString();
  const bb = b.toString();
  if (aa.length !== bb.length) {
    return false;
  }

  const match = {};
  for (let i = 0; i < aa.length; i++) {
    let letter = aa[i];
    match[letter] = (match[letter] || 0) + 1
  }

  for (let i = 0; i < bb.length; i++) {
    let letter = bb[i];
    if (!match[letter]) {
      return false;
    } else {
      match[letter] -= 1;
    }
  }
  return true;
}
