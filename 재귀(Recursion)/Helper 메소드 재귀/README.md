#<a href="#1">🐣 helper_method_재귀</a> <br/>
#<a href="#2">🐣 순수 재귀</a> <br/>

<br/>
<br/>

# 🐣 helper_method_재귀 <span id="1">
## 설명
- 이전까지 살펴본 재귀 함수들은 단일 단독 함수(스스로를 재귀)
- 헬퍼 메소드 재귀의 경우 코드가 실제로 뭘 하지는 않음
- 두 개의 함수 존재
- 외부 함수와 내부에는 재귀 함수
- 아래의 재귀함수 또한 자기 자신 호출
- 헬퍼 메소드 재귀는 그냥 재귀적이지 않은 외부 함수가 재귀적인 내부 함수(inner function)를 호출하는 패턴
```
function outer(input){
  var outerScopedVariable = []

  function helper(helperInput){
    // modify the outerScopedVariable
    helper(helperInput--)
  }

  helper(input)

  return outerScopedVariable;
}
```
- 메인 외부 함수는 우리가 외부에서 호출
- 외부 함수를 호출해서 무언가를 내부로 전달 가능
- 외부 함수 안에 또 다른 함수, 재귀적으로 자기 자신 호출
- 배열이나 데이터 목록 같은 걸 컴파일(compile)해야 할 때 흔히 이렇게 작업
- 타뷸레이션(tabulation)을 하는 게 아님. 팩토리얼이나 다른 함수를 사용했을 때처럼 하나의 값을 계속해서 곱하는 것도 아니고,
범위의 합계를 내는 것도 아님

<br/>

- 어느 배열에서 모든 홀수값을 수집하는 것과 같은 같은 작업을 수행 중이라면, 헬퍼 메소드 재귀를 사용하는 게 편함.
- 빈 배열을 생성하고 그 안에 모든 데이터를 입력. 그러고 나서 헬퍼 함수를 호출.

helper_method_recursion.js
```
function collectOddValues(arr) {

  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0])
    }

    helper(helperInput.slice(1))
  }

  helper(arr)

  return result;
}

collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9])
```
- 위에서 재귀 논리는 result를 조작할 것. result에 값 추가
- 이렇게 작업하는 이유는 result를 collectOddValues(외부)에 정리하면 함수가 재귀로 호출될 때마다 빈 배열로 리셋되기 때문에
- 헬퍼 메소드 재귀를 통해서 해당 문제 해결 result 값은 helper 재귀 속에서 
- 실제 논리는 helper이고, 배열을 사용해서 helper(arr)에서 실행
- 종료 조건은 helperInput.length가 0일 때,
- 그 외에는 홀수를 걸러냄. result 값에 push
- 짝수 일 경우 helper 배열 slice한 부분배열로 다시 helper 재귀호출

<br/>
<br/>

# 🐣 순수_재귀 <span id="2">
collect_odds_pure_recursion.js

## 설명
- 재귀가 아닌 반복을 사용해서 홀수 반환 문제 해결(쉬움)
- 헬퍼 재귀를 사용할 수도 있지만 다음과 같이 순수 재귀 사용해서 작업 수행 가능
- 외부 데이터 구조 사용하지 않음
- 코드는 더 짧지만 이해하는데 어려울 수 잇음
```
function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

collectOddValues([1, 2, 3, 4, 5])
```
- 함수가 호출될 때마다 newArr 배열 초기화
- 리셋되어도 상관없음. 실제 작업은 계산이 완료 됐을 때 모든 배열을 하나로 합쳐서 반환하는 것
- 우선 arr.length가 0인지 확인하고 맞으면 newArr 반환
- arr가 배열일 경우 newArr에 push
- newArr를 concat하면서 collectOddValules 재귀 호출(arr slice한 값으로 넘기면서 재귀 호출)

<br/>

- 배열 사용하면서 헬퍼 메소드 없이 순수 재귀 솔루션사용 경우
- 배열 복사하는 slice, spread 연산자(operator), concat 같은 메소드 사용 - 배열 변경 필요 없음 / 일종의 결과 축적
- 문자열 변경 불가 - slice나 substring 사용해서 사본 만들어야 함
- 객체의 경우 object.assign이나 spread 연산자 사용하는 것이 유용