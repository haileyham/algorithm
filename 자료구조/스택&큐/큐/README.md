<a href="#1">🐣 큐 Queue </a> <br/>
<a href="#2">🐣 배열을 사용하여 큐 만들기</a> <br/>
<a href="#3">🐣 큐 코드로 만들어보기 </a> <br/>
<a href="#4">🐣 큐의 Big O</a> <br/>
[queue slide](https://cs.slides.com/colt_steele/queues)

<br/>
<br/>

# 🐣   <span id="1">
## 큐 Queue 란?
- 데이터의 모음
- 압축적인 데이터의 구조
- 선입 선출 원칙 (FIFO)
- 선형 데이터 구조
- enqueue (add item) and dequeue (remove item).
- 사용 사례: 작업 예약, 웹 서버의 요청 처리 및 너비 우선 검색 알고리즘에 사용
- 디즈니랜드에 있는 줄이나, 비행기 같은 것을 기다릴 때의 줄(줄에 가장 먼저 선 사람이 가장 먼저 나감)
- 온라인 게임에서 접속을 하려고 대기하고 있다면 보통 가장 오래 기다린 사람을 추적하는 큐 데이터 구조가 있어서 게임에 먼저 접속
- 프린트 대기열
- 무언가를 추가하기 위해 사용하는 키워드는 enqueue
- 무언가를 제거할 때 사용하는 것은 dequeue

<br/>
<br/>

# 🐣 배열을 사용하여 큐 만들기  <span id="2">
- 다음과 같이 할 경우 
- 배열의 크기가 커질 수록 shift할 때 index 재배열 부담
```
var q = [];

q.push("First"); // 1
q.push("Second"); // 2
q.push("Third); // 3
q // (3)["First", "Second", "Third"]

q.shift(); // "First"
q.shift(); // "Second"
q.shift(); // "Third"
q.shift(); // undefined
```
- 혹은 unshift와 pop을 이용할 수도 있는데 
- 처음 unshift 할 때 index 재배열 부담
- 큐 데이터 연결 리스트를 이용하여 만들어 보겠쌈

<br/>
<br/>

# 🐣 큐 코드로 만들어보기  <span id="3">
```
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue(){
        if(!this.first) return null;

        var temp = this.first;
        if(this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}
```

- [enqueue]
- enqueue에는 val을 인자로 받음
- new node하고
- first가 없다면 first와 last에 newNode
- 보통의 경우 기존 마지막의 next에 null 값인데 
- last.next에 newNode 설정, 기존의 last에 newNode 로설정 
- 이해가 안간다면 다시 쉽게 설명하면
- 맨 끝에 데이터를 추가한 것이기 때문에, 기존의 last가 마지막에서 2번째가 되는 것임
- 그래서 기존의 last의 next가 null 값이었는데, 그걸 newNode로 바꿔주고
- last에는 newNode를 넣어주는 것(새로운 node를 last로 만듦)
- 그럼 기존의 last는 2번째가되고, 새로운 node가 last됨
- 마지막으로 size를 증가시켜줌

<br/>

- [dequeue]
- first가 없다면 null 값을 반환
- temp에다가 first 값을 넣어주고
- first와 last 값이 같다면 last에는 null 값을 넣음(리스트 길이가 1일 때를 의미)
- 그리고 기존의 first 에는 first.next를 넣어주고(기존 2번째꺼를 1번째로 바꿔줌)
- size를 -- 해주고, 기존 첫번째 즉 제거하는 node인 temp.value를 반환

<br/>
<br/>

# 🐣 큐의 Big O  <span id="4">
## 큐의 빅오
- insertion : O(1)
- removal : O(1)
- searching : O(n)
- access : O(n)

## 설명
- 추가의 경우 끝에 하고 O(1) - tail 바꾸는 것이기 때문에 훑을 필요 없음
- 제거의 경우 앞에서 하기 때문에 O(1) - tail이 아닌 앞에서 하기 때문에 head만 바꾸고 훑을 필요 없음