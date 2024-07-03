# <a href="#1">🐣 기수 정렬 Radix Sort</a> <br/>
# <a href="#2">🐣 기수 정렬 :  helper 메소드</a> <br/>
# <a href="#3">🐣 기수 정렬 :  의사코드 및 구현</a> <br/>
# <a href="#4">🐣 기수 정렬 :  빅오 복잡도</a> <br/>
radix_helpers.js
radix_sort.js

<br/>
<br/>

# 🐣  기수 정렬 <span id="1">
## 설명
- 지금까지 살펴본 것들은 비교 정렬 알고리즘
- 기수 정렬의 경우 비교 알고리즘이 아닌 정렬 알고리즘 유형
- 데이터의 특별한 속성 이용
- 직접 비교하지 않는다는 의미로 해당 숫자가 다른 숫자보다 작은지 큰지 비교하지 않고 다른 방식으로 데이터를 정렬

## 작동 원리
- 비교를 수행하지 않는 정렬 알고리즘
- 숫자로 작동
- 실제로 사용할 때는 이진수 사용하여 다른 데이터 정렬
- 하지만 정렬할 때 사용할 실제 데이터는 숫자, 십진법
- 숫자 크기에 대한 정보를 자릿수로 인코딩

## 실제 작동 방식
(이미지)
[1]
- 정렬하려고 하는 수 목록
- 십진수인 한 자리 수,두 자리 수, 세 자리 수, 네 자리 수
- 열 개의 각기 다른 버킷을 만들고, 버킷은 기수가 10인 한 자리 수로 가능한 모든 숫자를 나타냄
- 숫자의 어느 지점이든 0, 1, 2와 같이 9까지의 수가 될 수 있음
- 전체 수 목록을 살펴보고 여기 이 자릿수를 확인하여 시작
- 오른쪽에서 첫 번째 자릿수 6,4,6,3,8 ... 이 숫자 기준으로 버킷에 분류
- 가장 오른쪽에 2라는 숫자가 있는 모든 수가 2번 버킷에 있음
- 그룹으로 묶음
- 버킷 안에서는 정렬하지 않음
[2]
- 다시 목록을 구성
- 마지막 숫자가 2,3인 숫자들이 앞으로 옴
- 가장 마지막에는 끝 숫자가 9인 수가 옴
[3]
- 확인된 숫자 제외하고 그 다음 자릿수에서 과정 반복
- 10의 자리 숫자 살펴봐서 분류
- 7,4의 경우 10의 자리 숫자 없지만 07,04이기 때문에 0 버킷에 들어감(0버킷 : 408,7,4,902 등)
[4]
- 다시 목록을 구성
- 이 과정을 실제로 수행해야 할 횟수는 가장 큰 수의 자릿수에 달려있음
[끝]
- 숫자를 직접적으로 비교하지 않고, 숫자의 특징을 이용하여 버킷에 분류하고, 목록 구성하고, 다시 분류하여 정렬

<br/>
<br/>

# 🐣 기수정렬 : helper 메소드  <span id="2">

## [1] helper 1: 자릿수 알아내기 (getDigit)
- 수와 위치를 가져온 다음 그 위치의 숫자를 반환
- 12345 수가 있으면, 12345의 1번 위치에서 자릿수를 알아내면 이 숫자를 얻을 수 있음
- 0번 위치는 5 (1의 자리 숫자 위치)
- 4번 위치는 1
- 5번 위치는 0임
```
getDigit(12345, 0); // 5
getDigit(12345, 1); // 4
getDigit(12345, 2); // 3
getDigit(12345, 3); // 2
getDigit(12345, 4); // 1
getDigit(12345, 5); // 0
```
- (방법1)
- 문자열로 변환한 다음 올바른 인덱스를 사용하여 원하는 수에 적용하고 숫자로 다시 변환
- 문자열 인덱스는 왼쪽부터 시작하기 때문에 0번 위치를 물어 문자열을 반환하고 0의 값을 얻으면 완전히 반대쪽에 작용
- 거꾸로 작동하도록, 음수 인덱스 등을 사용하여 문자열 되돌리거나 계산 가능
- 위 방법은 10진수로만 작동, 이진법으로는 작동하게 하지 않아도 됨

<br/>

- (방법2)
- 각 위치는 10의 거듭제곱
- 1의 자릿수는 10의 0 거듭제곱 
- 10의 거듭제곱으로 나누어 약간의 계산 수행

<br/>

### 해결법
- stack over flow에서 가져옴. 자릿수 알아내기(getDigit)
```
function getDigit(num, i){
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
```
- 7323을 살펴본다 했을 때,
- getDigit(7323,2)의 경우 0,1,2번째 이기 때문에 3(=300)을 살펴보는 것
- [Math.floor](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)
- [Math.pow](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/pow)
- [Math.abs](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/abs)
- Math.pow (10, i) 일경우 밑값 10, 지수 i 
- 위에서는 밑값 10, 지수 2이기 때문에 100이 나옴
- Math.num 은 7323 절댓값으로 만들기 때문에
- Math.floor(7323 / 100) % 10; 계산을 하는 것으로
- Math.floor(73.23) % 10;
- 73 % 10;
- 3 이 나옴

<br/>

## [2-1] helper 2: 자릿수가 얼마나 되는지 알아보기
- 두 가지 메소드
- 첫 번째로는 하나의 수에 대한 자릿수를 계산(digitCount)
- 두 번째로는 전체목록에서 자릿수가 가장 많은 수를 알아내는데 자릿수 계산(digitCount)을 사용
- 자릿수 계산을 호출할 최대 자릿수가 도출
- 자릿수 계산에 10진수를 넣으면 자릿수가 얼마나 되는지 반환
```
digitCount(1); // 1
digitCount(25); // 2
digitCount(314); // 3
```

- 각 길이를 찾거나 계산


### 해결법
```
function digitCount(num){
  if(num === 0) retrun 1;
  retrun Math.floor(Math.log10(Math.abs(num))) + 1;
}
```
- [Math.log10](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/log10)
- Math.log10은 숫자의 밑이 10인 로그 반환
- digitCount(423)을 넣을 경우
- Math.floor(Math.log10(Math.abs(num))) + 1 차례대로 살펴보면
- Math.abs(423) = 423
- Math.log10(423) = 2.6262....
- Math.floor(2.6262...) = 3
- 3 + 1 = 4해서 4가 나옴
- 만약 0을 넣을 경우 1자릿수가 되는데, 문제는 0에 Math.log10 수행하려고 하면 -Infinity를 얻게 됨
- 그래서 if 문 추가하여 0이면 return 1 하도록 함

<br/>

## [2-2] helper 3: 최대 자릿수(mostDigits)
- 수 목록을 가져와서 가장 자릿수가 많은 수가 무엇인지, 자릿수 계산을 통해 알려줌
0 자릿수 계산을 가져와 목록 내의 각 수에 실행하고, 최댓값에 대한 총계를 내서 수를 반환
- 반환할 때는 가장 자릿수가 많은 수 반환할 필요 없이 자릿수만 필요
```
mostDigits([1234,56,7]); // 4
mostDigits([1,1,11111,1]); // 5
mostDigits([12,34,56,78]); // 2
```

### 해결법
```
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}
```
- 자릿수 최댓값은 0에서 시작
- nums에 반복문 수행하고 Math.max 사용
- 만약 0과 12를 넣을 경우 12 반환(항상 큰 수)
- mostDigits([23,567,89,12234324,90])을 수행할 경우
- 23은 2
- 567은 3 이런식으로 쭉 감
- 12234324에서 8나옴
- helper는 이렇게 3개임!_! 

<br/>
<br/>

# 🐣 기수정렬 : 의사코드 및 구현  <span id="3">
- 앞에서 살펴본 helper는 3개임
- 이제 헬퍼 메소드를 루프에 몇 번 호출하고 버킷을 만듦

## 과정
[1] <br/>
- 수 목록을 받는 함수를 정의 (기수 정렬 radix sort)
- 먼저 가장 큰 수가 몇 자리인지 알아내야 함
- 최댓 자릿수(mostDigit)을 사용하여 확인
- 만약 4일 경우, 루프 4번 수행
- 버킷에다 각각의 자릿수로 4번 정렬 필요하기 때문
- 네 번 수행하려면 0에서 1, 그 다음 2, 그 다음 3으로 진행
- 버킷은 빈 배열이며, 진행할 때마다, 각 자릿수에 버킷을 만듦
- 하위 배열이 10개 있는 배열 (0부터 9까지)
- 이 배열의 0번 인덱스는 빈 배열로 시작
- 루프를 수행할 때마다 각각의 수를 올바른 버킷에 넣음
- kth 를 따르는데, kth 자릿수란 : 루프 k가 무엇이든 0에서 시작하며 각 수를 올바른 위치, 올바른 버킷 슬롯에 0 자리를 사용하여 분류하고 다음으로는 첫째자리, 둘쨋자리를 이용한다는 것
[2] <br/>
- 각 배열이 아니라 열개의 슬롯을 가진 하나의 큰 배열
- 10의 0번 위치에 각각 분류 getDigit 사용하여 각 해당 자릿수 위치에 넣기
- 그 다음 현재 위치한 순서를 사용하여 목록으로 재구성
- 새 배열로 합치려고 함
- 순서 유지하고 다음 과정 시작
[3] <br/>
- 루프는 두개
- 외곽루프는 4번 수행 0,1,2,3번 자리를 살펴봄
- 내부 루프는 목록의 각 수에 무언가를 실제로 수행(위치이동)
- 마지막에는 목록을 반환

<br/>

## 구현
radix_sort.js
```
function radixSort(nums){
    let maxDigitCount = mostDigits(nums);
    for(let k = 0; k < maxDigitCount; k++){
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let i = 0; i < nums.length; i++){
            let digit = getDigit(nums[i],k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

radixSort([23,345,5467,12,2345,9852])
```

- 위에는 radixSort이고
- mostDigits, digitCount, getDigit의 helper method를 포함한 전체 코드는 아래에!
- 전체 코드
```
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(nums){
    let maxDigitCount = mostDigits(nums);
    for(let k = 0; k < maxDigitCount; k++){
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let i = 0; i < nums.length; i++){
            let digit = getDigit(nums[i],k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

radixSort([23,345,5467,12,2345,9852])
```

- 첫 째로 헬퍼메소르를 가지고 기수 정렬 radixSort 함수를 정의
- 수 목록 nums를 받음
- 다음으로 가장 큰 수에 자릿수가 얼마나 있는지 파악 (mostDigits)
- for문에 k 넣고 maxDigitCount최댓값 카운트까지
- digitBuckets 변수에 빈 배열 작성
- for nums.lenght만큼 돌리면서 getDigit을 통해 자릿수 위치 변경하면서 버켓에 push
- 최대 자릿수만큼 반복
- [concat](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
- 마지막 nums에 배열을 합치는데 digitBuckets 합침

<br/>
<br/>

# 🐣 기수정렬 : 빅오 복잡도  <span id="4">
<img src="https://raw.githubusercontent.com/haileyham/algorithm/6ba3a51e77c7b966c24f32d01464bd1589eb4ef7/%EC%A0%95%EB%A0%AC/%EA%B8%B0%EC%88%98%EC%A0%95%EB%A0%AC/radix%20sort%20Big%20O.png">

<br/>

- 일반적으로 인정되는 표기
- 최상, 평균, 최악 시간 복잡도 모두 O(nk)
- n 은 정렬할 항목 수 or 정수의 수
- k는 이러한 수의 길이
- 자릿수가 길다면 무시할 수 없는 상수 임. 상당한 영향을 끼침
- 비교정렬은 최상 및 평균이 O(n log n)
- k에 log n 을 넣으면 n log n이 되기 때문에 비교 정렬에서와 같아짐
- 기수 정렬은 모든 비교 정렬보다 빠를 수 있음
- 컴퓨터 메모리에 수를 저장하는 방식에 대한 제한으로 인해 실제로는 그렇지 않을 수 있으며 비교 정렬과 마찬가지 일 수 있음
- 공간 복잡도는 O(n+k)