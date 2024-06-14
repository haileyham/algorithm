# Big O
## Time Complexity 시간복잡도
## Space Complexity 공간복잡도

# 🍕 1. Big O Definition
We say that an algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant times f(n), as n increases

f(n) could be linear (f(n) = n)
f(n) could be quadratic (f(n) = n  )
f(n) could be constant (f(n) = 1)
f(n) could be something entirely different!

- To analyze the performance of an algorithm, we use Big O Notation
- Big O Notation can give us a high level understanding of the time or space complexity of an algorithm
- Big O Notation doesn't care about precision, only about general trends (linear? quadratic? constant?)
- The time or space complexity (as measured by Big O) depends only on the algorithm, not the hardware used to run the algorithm
- Big O Notation is everywhere, so get lots of practice!

# 🍕 2. Time Complexity 시간복잡도

# 🍕 3. Space Complexity 공간복잡도
- Most primitives (booleans, numbers, undefined, null) are constant space
- Strings require O(n) space (where n is the string length)
- Reference types are generally O( n), where n is the length (for arrays) or the number of keys (for objects)

------------
<br/>
<br/>


# 🐣 빅오 표기법 Big O Notation
# 🐣 빅오표기법 필요성
여러가지 코드를 비교하고 성능을 평가하는 방법이다.
예를들어 문자열을 받아서 뒤집어 출력하는 함수를 생각해 봤을 때,
여러가지 방법 존재하고
어떤 것이 좋은지 판단 필요하다.

<br/>
<br/>
 
# 🐣 코드 시간 재기
## 1. 예시
예시) 1에서부터 특정한 N 값과 사이에 있는 모든 숫자들을 더하는 함수를 살펴보자.

<br/>

## 2. 코드 비교
편리하게 사용하기 위해서
[snippets 사용하기] chrome > sources 탭 > snippets]

### for 문
```
function addUpTo(n){
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}
```

### 수학 공식
```
function addUpTo(n){
    return n * (n + 1) / 2;
}
```
<br/>

## 3. 더 좋다는 의미는? 무엇일까?
- Faster 빠르기
- Less memory-intensive 적은 메모리 사용
- More readable 읽기 쉬운 코드
- 빠르기 + 적은 메모리 사용 = 적절한 balance 필요

<br/>

## 4. 속도 평가 (코드가 실행되는데 걸리는 시간)
- iming function 사용
- performance.now() 브라우저 창이 열린 시간 알려줌(=브라우저가 이 문서를 만든 시간)
- 사이에 addUpTo 실행하고, 다시 실행하면 시간 체크 가능
1000으로 나누는 이유 1000분의 1초 (안 해도 됨)
```
function addUpTo(n){
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed : ${(t2 - t1) / 1000} seconds.`)
```

- 아래 코드가 더 빠른 것을 확인할 수 있다(다시 직접 돌려보기~ 슝슝)

```
function addUpTo(n){
    return n * (n + 1) / 2;
}

let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed : ${(t2 - t1) / 1000} seconds.`)
```

하지만 문제점 존재하는데 !_! 뚜둥!
- 완전히 믿을 수 없음. 기기 사양에 따라 다를 수도 있기 때문
- 동일 기기가 다른 시간을 기록할 수 있음
- 빠른 알고리즘에서는 정말 짧은 시간에 이루어지기 때문에 측정 불가 (작은 차이를 catch 하기 힘듦)
이럴 때 빅오를 사용!

<br/>
<br/>

 
# 🐣 연산 갯수 세기
코드가 실행될때 걸리는 정확한 시간을 측정하기보다 컴퓨터가 처리해야하는 연산 갯수를 세기
기기에 따라 걸리는 시간이 다를 수 있지만 시간은 항상 연산 갯수에 따라 달라짐

###  1. 연산 1
아래의 경우 연산 3번으로 이루어져있다.

### 2. 연산 2
- 연산의 경우가 많은데, 사실 += 하나하나 세지는 않는다. 
- 5n + 2 이지만 사실 5n + 2 혹은 3n , 50n 은 중요하지 않다. 전체적인 추세를 보는 것이기 때문!
N이 커질수록 연산의 갯수도 비례적으로 늘어난다는 것!

 