#<a href="#1">🐣 반복문으로 팩토리얼 구현하기</a> <br/>
#<a href="#2">🐣 재귀 호출로 팩토리얼 구현하기</a> <br/>

<br/>
<br/>

# 🐣 반복문으로 팩토리얼 구현하기 <span id="1">

## 코드로 살펴보기
factorial_iterative.js
```
function factorial(num){
    let total = 1;
    for(let i = num; i > 1; i--){
        total *= i
    }
    return total;
}
```
- 반복문으로 팩토리얼 구현(비재귀적 해결법)
- factorial(4) 할 경우 4 * 3 * 2  순서로 i값 작아지면서 진행하여 24 결과 도출
- 마지막 1의 경우 그전 값의 * 1이기 때문에 i값 1보다 큰 값까지만 진행



<br/>
<br/>

# 🐣 재귀 호출로 팩토리얼 구현하기 <span id="2">

## 코드로 살펴보기
factorial_recursive.js
```
function factorial(num){
    if(num === 1) return 1;
    return num * factorial(num-1);
}
```
- 재귀적 해결법
- num 이 1과 같을 때 종료 (반복문의 경우 i가 1보다 큰 값까지만 진행)
- 그 전까지는 계속해서 factorial 재귀적 호출
- factorial(4)로 num이 4로 들어오면 
```
factorial(4) 진행할 경우,

4 * factorial(3)
3 * factorial(2)
2 * factorial(1)
순으로 되고, 계산은
factorial(1) = return 1되어서 종료되면서
2 * 1(factorial(1)값) = 2
3 * 2(factorial(2)값) = 6
4 * 6(factorial(3)값) = 24
순으로 진행
```

