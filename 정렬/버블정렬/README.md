<a href="#1">🐣 정렬</a> <br/>
<a href="#2">🐣 버블 정렬</a> <br/>
<a href="#3">🐣 버블 정렬 구현</a> <br/>
<a href="#4">🐣 버블 정렬 최적화</a> <br/>

<br/>
<br/>

# 🐣  정렬 <span id="1">

## 기본 내장 JavaScript 정렬
[sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- 기본 정렬 순서는 문자열 유니코드(Unicode) 코드 포인트(code point)에 따름
- 배열의 모든 항목이 문자열로 변환되고, 해당 문자열의 유니코드 값이 선택되고, 그 다음에 항목이 정렬됨.
- 애초에 문자열로 정렬 시작하지 않는 한 원하는 결과 얻는게 힘듦

## 작동 방법
- 내장 정렬 메소드는 선택적 비교 함수(optional comparator function)를 인자로 전달 받음
- 이 함수를 사용해서 자바스크립트에 우리가 원하는 정렬 방식을 알릴 수 있음
- 기본적으로 이 함수는 A와 B라는 2개의 항목이 있는 구조로 작성
- 반환되는 값을 토대로 만들 정렬 순서를 자바스크립트에 알림
- 만약에 a와 b라는 2개의 항목이 있는 상태에서 음수를 반환하면, 자바스크립트는 두 항목을 비교할 때마다 이 함수를 호출
- 함수가 음수를 반환하면 자바스크립트는 a가 b 앞에 온다고 결정. 양수를 반환하면 그 반대.
- a가 b 뒤에옴.그리고 0을 반환하면, 자바스크립트는 a와 b를 동일하게 취급하고 한꺼번에 정렬하는데, 아무 상관 없음

## 예시1(숫자 기준 정렬)
```
function numberCompared(num1, num2){
  return num1 - num2;
}
[6,4,15,10].sort(numberCompare);
// [4,6,10,15]
```

- num1 - num2가 음수를 반환하면, num1이 num2 앞에 옴
- num1 - num2가 양수를 반환하면 num2가 num1 앞에 옴.
- 이렇게 하면 이제는 숫자가 오름차순으로 제대로 정렬
- 유니코드 문자를 사용하거나 그 밖의 여러 가지에 대해 걱정할 필요 없음

## 예시2(문자열 길이 기준 정렬)
```
function compareByLen(str1, str2){
  return str1.length - str2.length;
}
["Steele", "Colt", "Data Structures", "Algorithms"].sort(compareByLen);
```
- 문자열의 길이를 기준으로 정렬을 하는 것도 가능. 알파벳순으로 정렬하는 게 아님
- 제일 짧은 문자열부터 정렬. Colt에서 시작해서 제일 긴 문자열인 Data Structures에서 끝
- 다만 이 함수는 이 2개의 인자를 전달받아야 함 여기에 사용되는 인자. 반환하는 값은 음수나 양수 또는 0.
- str1.length - str2.length라고 작성하고, comparebyLen

<br/>
<br/>

# 🐣   버블 정렬 <span id="2">

## 들어가기 전에
- 버블 정렬은 별로 효율적이지 않음
- 흔히 사용되지 않고, 유스케이스(use case) 하나 있음
- 빈번하게 구현하지 않지만 두각을 나타내는 분야가 있긴 함
- 다른 알고리즘이 버블 정렬보다 더 나은 이유를 이해하는데 도움

## 설명
- 버블 정렬의 개념은 배열을 가장 작은 숫자에서 가장 큰 숫자순으로, 그러니까 오름차순으로 정렬을 한다면 더 큰 숫자가 한 번에 하나씩 뒤로 이동. 
- 참고 [비주알고(VisuAlgo)](https://visualgo.net/en/sorting).
- 버블 정렬의 작동 방식은 루프를 돌면서 각 항목을 다음 항목(해당 항목의 오른쪽에 있는 항목)과 비교
- 숫자가 비교 대상보다 더 큰지 확인 후 교환(swap)
- 기본적으로 어떤 항목이 더 크면 교환을 하고, 다음 항목과 비교하고, 다음 항목보다 더 크면 또 교환을 하고, 다시 다음 항목과 비교
- 맨 앞에서부터 비교해서 들어감. 첫 번째로 배열을 끝까지 정렬하고, 다시 맨 앞에서부터 다시 과정 반복.
- 반복을 거듭함에 따라 우리가 정렬해야 하는 항목의 수가 감소(반복을 할 때마다 정렬할 항목이 줄어듦)

## JS 교환 방법
```
// ES5
function swap(arr, idx1, idx2){
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

// ES2015
const swap = (arr, idx1, idx2) => {
  [arr[idx1],arr[idx2]] = [arr[idx2], arr[idx1]];
}
```

<br/>
<br/>

# 🐣   버블 정렬 구현<span id="3">

## 구현 1
- 루프를 시작. 즉, 함수를 정의. 명칭은 bubbleSort.
- 배열을 인자로 전달받는데, 전부 숫자라고 가정.
- i라는 변수를 가지고 배열의 맨 끝에서 루프를 시작해서 맨 앞에서 끝. 그 이유는 나중에 정확하게 설명.
- 우선은 정렬을 하고 있는 배열의 항목 수를 줄이는 것과 관련된다는 사실.
- 외부 루프 안에는 j라는 변수가 포함된 내부 루프. 내부 루프는 처음부터 i - 1까지 실행.
- i는 첫 번째 루프를 참조.
- 첫 번째 루프에 의존하는 중첩 루프라고 생각. i -1. 그러고 나면 그냥 arr[j]를 비교.
- 만약에 j가 0이면 이걸 arr[J+1]과 비교. 다음 항목임.
- j가 뭐든 간에, j를 그 다음 항목과 비교. j와 j+1을 비교.
- arr[j]가 arr[j+1]보다 더 크면 교환을 해야 한다는 의미

bubble_unoptimized.js
```
// UNOPTIMIZED VERSION OF BUBBLE SORT
function bubbleSort(arr){
  for(var i = arr.length; i > 0; i--){
    for(var j = 0; j < i - 1; j++){
      console.log(arr, arr[j], arr[j+1]);
      if(arr[j] > arr[j+1]){
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;         
      }
    }
  }
  return arr;
}

// ES2015 Version
function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

bubbleSort([8,1,2,3,4,5,6,7]);
```
- i=0; i<arr.length 가 아니라 
- i = arr.length; i > 0; i-- / var j = 0; j < i - 1; j++ 인 이유는 무의미한 비교를 하지 않기 위해서
- 맨 처음 배열 길이를 i로 시작. 만약 i가 4라면,
- 내부 : j가 i-1보다 작으면 j 증가 (즉 i가 4면 3번만 비교하면 됨)
- 외부 : 배열 길이 i에서 시작 0전까지 i 계속해서 --
- 내부 : j가 i-1보다 작으면이니까 i가 3됐으면, 2번만 비교

<br/>
<br/>

# 🐣   버블 정렬 최적화 <span id="4">
- 교환 항목이 없는데 계속해서 항목 정렬 실행 시도
- 루프가 마지막으로 실행 됐을 때 교환했는지 확인하고, 마지막에 교환을 하지 않았으면 정렬 완료된 것

<br/>

optimized_bubble.js
```
// Optimized BubbleSort with noSwaps
function bubbleSort(arr){
  var noSwaps;
  for(var i = arr.length; i > 0; i--){
    noSwaps = true;
    for(var j = 0; j < i - 1; j++){
      if(arr[j] > arr[j+1]){
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        noSwaps = false;         
      }
    }
    if(noSwaps) break;
  }
  return arr;
}

bubbleSort([8,1,2,3,4,5,6,7]);
```
- noSwaps 만들어서 비교하는지 확인 후 처리
- 외부에 noSwaps 만들고 
- 내부에 false 처리해서, 내부 if문 돌지 않았다면 반복문 바깥으로 나가짐. true인 상태이기 때문에 break.

## 빅오 복잡도
- 일반적으로 n² / 중첩 루프, 대략적 비교
- 거의 정렬 or 이미 정렬 끝난 상태 noSwaps 변수 있으면 선형시간에 가까움
- 교환되지 않은 상태 확인하기 위해 다시 실행 후 루프 빠져나왔기 때문
- 가능한 최고의 경우 O(n)
- 위에서 살펴본 우리 예시는 2n, 간소화해서 O(n)
