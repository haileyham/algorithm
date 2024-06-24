<a href="#1">🐣 정의</a> <br/>
<a href="#2">🐣 리팩토링</a>
max_sum_naive.js
max_sum_refactored.js

<br/>
<br/>

# 🐣 정의 <span id="1">
슬라이딩 윈도우. 배열이나 문자열과 같은 일련의 데이터를 입력하거나 특정 방식으로 연속적인 해당 데이터의 하위 집합을 찾는 경우에 유용

### 문제 및 코드
max_sum_naive.js
```
maxSubarraySum([1,2,5,2,8,1,5],2) // 10
maxSubarraySum([1,2,5,2,8,1,5],4) // 17
maxSubarraySum([4,2,1,6],1) // 6
maxSubarraySum([4,2,1,6,2],4) // 13
maxSubarraySum([],4) // null
```
배열과 숫자 하나를 전달하고 서로 마주한 두 숫자의 가장 큰 합계를 찾아야 함. 두 번째 라인의 경우, 서로 마주한 네 숫자의 가장 큰 합계. 따라서 이 라인은 10을 반환합니다. 가장 큰 합계를 가진 서로 마주한 두 숫자가 8과 2이므로 10 반환.


## 🐣 설명
1. arr, num 을 받음
2. 주어진 num이 arr.length보다 클 경우 null 반환
3. max는 -infinity (max를 만들어서 -Infinity에서 시작되도록. 배열이 모두 음수로 구성되어 있다면 가장 큰 합은 여전히 음수일 것이기 때문. 이처럼 양수로만 작업을 하지 않는 한 0에서 시작하는 것은 전혀 도움이 되지 않기 때문에 -Infinity로 설정)
4. for 반복문 arr.length - num + 1; (합계를 구할 수 있는 마지막 위치에서 중단해야되기 때문)
5. temp = 0 ;
6. 중첩된 for 반복문. j < num;
7. temp에 arr[i+j]값을 넣어줌
8. if문으로 temp > max 일때 max에다가 temp 넣어줌
9. max를 return

### 문제점
중첩된 루프로인하여 비효율적


# 🐣 리팩토링 <span id="2">
max_sum_refactored.js
O(n)

## 🐣 설명
1. maxSum과 tempSum에 각 0
2. arr.length < num 일 경우 null 반환
3. for 반복문 i < num; maxSum에 arr[i] 추가(+2+6+9)
4. tempSum = maxSum; 넣기
5. for 반복문 i=num;이고 i < arr.length;
6. tempSum에 temSum - arr[i - num] + arr[i] (앞의 for문에서 구한 2,6,9의 합 17이 tempSum이고, arr[i-num]은 여기서 3-3으로 arr[0]이고, arr[i]는 arr[3]임. 결국 17 - 2 + 2 이므로, 인덱스로 설명하면 arr[0]~arr[2]까지의 합에서 arr[0]을 빼고 arr[3]을 더한 것!)
7. maxSum은 maxSum과 tempSum 중에 max (maxSum에는 기존의 maxSum과 tempSum을 비교하여 더 큰 것으로 계속 update)
8. maxSum 반환