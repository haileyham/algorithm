<a href="#1">🐣 힙 Heaps </a> <br/>
<a href="#2">🐣 힙(Heaps) 정렬</a> <br/>
<a href="#3">🐣 힙 : Insert </a> <br/>
<a href="#4">🐣 힙 : ExtractMax </a> <br/>
<a href="#5">🐣 우선 순위 큐(Queue) </a> <br/>
<a href="#6">🐣 이진 힙의 빅오 : Big O </a> <br/>
- [이진 힙 slide](https://cs.slides.com/colt_steele/heaps)
- [이진 힙 Binary Heap Visualgo](https://visualgo.net/en/heap?slide=1)
- Max_Binary_Heap_Insert.js
- Max_Binary_Heap_ExtractMax.js
- Priority_Queue.js

<br/>
<br/>

# 🐣 힙 Heaps <span id="1">
### 힙이란?
- 힙은 트리의 일종
- 트리에 대해 적용되는 것은 일반적으로 힙에도 적용
- 힙에만 특별히 추가되는 규칙 존재
- 힙 종류 다양 : 피보나치 힙, 레오나르도 힙, 소프트 힙, 좌측 힙 등
- 그 중 이진 힙을 중점으로 다룰 것(이진 힙도 두종류로 나뉨)

<br/>

### 이진 힙이란?
- 이진 탐색 트리와 매우 비슷하지만 다른 규칙 존재
- 이진 탐색 노드와 마찬가지로 각 노드는 언제나 최대 두 개의 자식(이진)
- 이진 탐색 트리와는 다르게 왼쪽과 오른쪽에는 순서가 존재하지 않음
- 이진 힙은 언제나 최적의 용량
- 이진 탐색 트리에서는 끝없이 요소들을 추가할 수 있었지만, 이진 힙은 언제나 가능한 가장 적은 공간을 차지

<br/>

[최대 이진 힙 MaxBinaryHeap]
- (이미지)
- 최대 이진 힙에서는 부모 노드가 항상 자식 노드보다 큰 값 지님
- 즉, 최대 이진 힙에서는 모든 자식 노드가 부모보다 작음
- 루트가 가장 큰 노드로서, 트리에 있는 가장 큰 숫자
- 왼쪽과 오른쪽에는 순서 없고, 부모보다 작은 값
- 알아둬야 할 점은 2번째칸의 노드들의 숫자들이 반드시 전체 힙에서 두번째로 큰 숫자는 아닐 수도 있다는 점
- 왼쪽이 먼저 채워져야함.

[최소 이진 힙 MinBinaryHeap]
- 최소 이진 힙은 부모 노드가 언제나 양쪽의 자식보다 작음
- 위의 최대 이진 힙의 내용과 반대라 생각하면 됨

<br/>

### 이진 힙 배우는 이유?
- 힙을 이용해서 우선순위 큐라는 것을 코딩하는 법을 배우기 위해서 배움!
- 기본적으로 큐를 생각해보면 요소들을 추가하고 제거하면서 무언가의 순서를 추적하는 기능
- 우선순위 큐는 거기에다가 우선순위를 부여하게 되는 것임
- 즉, 각 요소에 대해 중요한 정도를 부여해서 중요한 정도에 따라 큐 안의 적절한 장소에 배치
- 그래프 순회라는 것에 자주 사용함
- 거기서 힙은 보조 용도로 사용(우선순위 큐에 항상 사용됨)

<br/>
<br/>

# 🐣 힙(Heaps) 정렬 <span id="2">
- (이미지)
-  최대 이진 힙 (수직으로 세우기에 자리 부족해서 아래와 같이 그림)

<br/>

[부모 위치 기반 자식 찾기]
- (부모 자식 관계 이미지)
- 배열 안에 있는 모든 인덱스에 대해, 그 왼쪽 자식은 2n+1에 저장
- 오른쪽 자식은 2n+2에 저장되어 있음
- (index 6 이미지)
- 예를들어 index 6의 자식을 찾으려면 
- 2n+1 = 13 (왼쪽 자식) 인덱스
- 2n+2 = 14 (오른쪽 자식) 인덱스
- 부모의 위치 기반으로 자식 찾음

<br/>

[자식 위치 기반 부모 찾기]
- 자식 index 에서 (n-1)/2 소숫점 내림 floored 함


<br/>
<br/>

# 🐣 힙 : Insert  <span id="3">
- 최대 이진 힙만 하면 최소 이진 힙으로 바꾸는 것은 간단

## ▷ 힙(Heaps) : Insert
- Max_Binary_Heap_Insert.js

```
class MaxBinaryHeap {
    constructor(){
        this.values = [];
    }}
```

- value 프로퍼티만 존재. 빈 배열로 시작.
- 노드는 만들 필요 없음
- MaxBinaryHeap.insert(10) 혹은 MaxBinaryHeap.insert(50) 등을 insert 메소드 통해 추가
- 많은 노드를 만들어서 하나하나 직접 연결하는 대신에 그냥 배열에 저장해서 그 위치를 기반으로 구조를 모형화
- 위치 값, 즉 인덱스, 그러니까 각 요소의 위치에 상응하는 개별 숫자들이 힙의 구조 보여줌
- values 배열제 저장하면 됨

[버블업 이미지]
- 만약 루트가 41이고 55를 삽입한다 했을 때, 비교를 통해 버블업을 해서 자리를 바꿔주면 됨

<br/>

### 어떻게?
- value에 push
- bubble up 함
- 맨 마지막 index 가져와서 n-1/2 하고 내림
- 부모 index 구한다음에 값 비교하고 
- 자식이 더 클 경우 자리 위치 바꿈
- 해당 반복하여 위치 찾아주기


## ▷ 힙(Heaps) : Insert 메소드 솔루션
```
class MaxBinaryHeap {
    constructor(){
        this.values = [];
    }
    insert(element){
        this.values.push(element);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element <= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
```

- 일단 MaxBinaryHeap class 만들고
- constructor 생성자에는 values 빈 배열 만듦
- insert 메소드는 element를 인자로 받고, values에 push 그리고 bubbleUp 실행
- bubbleUp 메소드의 경우 insert 내에서 호출됨
- bubbleUp은 idx 변수에 values.length - 1 을 넣음. 즉 배열의 제일 마지막꺼를 idx로
- element 변수에는 values[idx]를 넣음. 즉 값을 넣음
- while 반복문 idx가 0보다 클 동안 
- parentIdx변수에다가 Math.floor((idx-1)/2) 함
- 부모 변수의 위치=index 찾기 위해서 계산
- parent 변수에다가 values[parentIdx] 부모 변수 값 넣음
- 조건문 if(element <= parent) break; 되도록 설정. 즉, element가 부모보다 작거나 같을 경우 멈추도록.
- this.values[parentIdx] = element; 부모에다가 element
- this.values[idx] = parent; 기존 element 자리에다가 부모값 넣음
- idx = parentIdx; idx는 부모 index로 업데이트 해줌
- idx > 0 이면 계쏙해서 반복. element <= parent 까지.

<br/>

### 쉽게 살펴보기
```
// [41,39,33,18,27,12,55]
//   0  1  2  3  4  5  6
```

- 위로 예를 들면 위의 배열들을 순서대로 insert 했었고, 마지막으로 55를 insert 했을 때, 55는 index 6임
- 해당 index를 가지고 부모 인덱스를 찾으면 Math.floor((idx - 1)/2); 이기 때문에 2.5 반내림해서 2가 나옴
- 즉 index 2 의 값인 33이 부모임
- 33과 55를 비교했을 때, 55가 더 크기 때문에 둘의 위치 바꿈
- 그다음 idx는 기존 33이 있었던 2로 업데이트 됨
- Math.floor((idx - 1)/2);다시하면 0.5라 0의 값이 나옴
- 즉 index 0 에 위치한 41과 55를 비교해서 55가 더 크기 때문에 둘의 위치 바꿈
- 끝

<br/>
<br/>

# 🐣 힙 : ExtractMax  <span id="4">
- Max_Binary_Heap_ExtractMax.js
## ▷ 힙(Heaps) : ExtractMax
- insert의 반대로 무언가를 제거하는 법
- 보통은 루트를 제거, 가장 큰 값, 최대값을 제거
- 정의할 메소드는 remove라고 부를 건데, extractMaximum 또는 extractMax라고 할 수도 있음
- 예를 들어서 우선순위 큐를 코딩한다고 하면, 각 요소에 우선순위를 부여해야 하고 우선순위에 따라서 값을 제거해야 하는데, 최대 이진 힙에서는 가장 큰 우선순위 값을 가진 요소가 가장 위에 올라옴. 그러면 그게 우선순위 큐에서 가장 먼저 제거할 요소임.
- 예를들어 [41,39,33,18,27,12] 일 경우

[이미지]
- 루트를 제거하고 나면 루트 자리에 배열의 끝 값이 옴
- 싱크다운(bubble-down, percolate-down, extract-min/max 등등이라 부르지만 싱크다운 sink down이라 하겠음)
- 즉 맨 마지막 요소를 올린 걸 제대로 된 자리에 두는 것

[이미지41제거]
- 12가 처음으로 감. 기존 루트 자리
- [12,39,33,18,27]
- sinkDown 호출하여 자식과 비교하여 제자리 찾아감
- [39,27,33,18,12]

<br/>

### 어떻게? 
- MaxBinaryHeap에다가 extractMax 메소드 추가
- 루트 출력하고, 배열 마지막 요소 pop 해서 빼놓음
- sinkDown 통해서 제자리 찾아가도록


## ▷ 힙(Heaps) : ExtractMax 메소드 솔루션
```
class MaxBinaryHeap {
    constructor(){
        this.values = [];
    }
    insert(element){
        this.values.push(element);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element <= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    extractMax(){
        const max = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
    }
    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild,rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild > element) {
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild > element) || 
                    (swap !== null && rightChild > leftChild)
                 ) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
```

[extractMax()]
- extractMax 메소드 만들고, 변수 max에는 values 배열의 index 0 값 즉 첫번째 값을, 변수 end에는 마지막 값을 pop함
- if (this.values.length > 0) 조건문으로 values의 값이 있을 동안 반복하는데, values[0]과 end가 같으면 sinkDown을 호출함
- 즉, 배열의 마지막 값이 루트 값과 같으면 호출
- return 값은 max 즉 values[0]임

[sinkDown()]
[1]
- 변수 idx에는 0
- length에는 value 배열 length
- element에는 values 배열의 0번째 index 값을 넣음. 즉 루트

[2]
- while 반복문 true 동안 돌림
- leftChildIdx(왼쪽자식)를 구하기 위해 2n + 1 (2 * idx + 1;)
- rightChildIdx(오른쪽자식)를 구하기 위해 2n + 2 (2 * idx + 2;)
- left,rightChild 선언하고 swap 에는 null 값 할당

[3]
- 조건문 if (leftChildIdx < length) 왼쪽 자식이 length 보다 작을 경우 leftChild에는 values[leftChildIdx] 값을 넣고
- 또 조건문 if 왼쪽 자식이 element 보다 큰 값일 경우 swap 에다가 leftChildIdx 를 넣어줌
- 즉 왼쪽 자식 노드가 미리 뽑아놨던 배열 첫값(=루트, 기존 배열 맨 마지막 값이었지만 루트 뽑히면서 루트자리로 간 값)보다 크면 swap에다가 왼쪽자식노드index 저장

[4]
- right도 똑같이 조건문 활용
- if 문안에 if 조건문이 다른데 
- (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
- 즉 swap이 null 값이고, 오른쪽 자식이 element(맨첫배열값)보다 클때
- 혹은 null 값이 아니고(=왼쪽자식idx들어가있고), 오른쪽노드가 왼쪽 노드보다 클때
- swap 에 rightChildIdx 넣음

[5]
- if (swap === null) break; 종료하고
- values[idx] 에는 values[swap] 넣고 (=왼쪽 혹은 오른쪽 자식 노드 idx 넣음)
- values[swap] 에는 element 넣고 (=왼쪽 혹은 오른쪽 노드 idx 값에 element 즉 values[0] 넣음)
- idx 에는 swap을 넣음 (=왼쪽 혹은 오른쪽 index)
- 그리고 계속해서 while 반복문
- swap 이 null 값이 될 때 까지 (= 왼쪽 혹은 오른쪽 노드 값보다 element가 클 때까지 = 원래 배열에서 젤 끝이었고, 루트 뽑히면서 루트자리로 간 노드값)

[6]
- 기존의 root 와 새로운 root 의 차이점을 인지하기
- 바뀌는 조건들 인지하기

<br/>

### 쉽게 보기
```
// [41,39,33,18,27,12]
//   0  1  2  3  4  5 
```

- 41을 빼고, 12를 41자리에 넣음
- [12,39,33,18,27]
- sinkDown 호출
- 반복문 동작하면서 바꿔줌
- 12의 왼쪽 노드 값을 swap에 index 저장(왼쪽 노드 idx = 2n+1 = 2*0 +1 = 1 = 즉 index 1값인 39)
- swap = 1
- 12 오른쪽 노드 값과 왼쪽 노드값 비교 (왼쪽 39, 오른쪽 33)하여 오른쪽이 더 클 경우 변경인데 조건 충족하지 못함
- 12 오른쪽 왼쪽 노드 중 왼쪽 노드의 값과 교체
- [39,12,33,18,27]
- 12의 왼쪽, 오른쪽 노드 값 비교(왼쪽 18, 오른쪽 27)하여 오른쪽이 더 크기 때문에 변경
- [39,27,33,18,12]

<br/>
<br/>

# 🐣 우선 순위 큐(Queue)  <span id="5">
## ▷ 우선 순위 큐(Queue)
[우선 순위 큐?]
- 우선순위 큐는 각 요소가 그에 해당하는 우선순위를 가지는 데이터 구조
- 더 높은 우선순위를 가진 요소가 더 낮은 우선순위를 가진 요소보다 먼저 처리
- 데이터 모음이 있는데 각 노드, 또는 요소가 각각에 대한 우선순위 값을 가지고 있는 것
- 리스트, 또는 구조, 즉 우리가 데이터를 저장한 곳에서 한 번에 하나씩 요소를 가지고 옴
- 한 번에 하나씩 처리를 한 다음에 그 다음 것을 처리하게 되는데, 꼭 병원에 있는 응급실 같이 어느정도 우선순위가 부여됨
- 서로 다른 우선순위를 가지는 데이터나 정보를 관리할 필요가 있거나 무언가를 입력하는데 입력하는 것이 순서에 맞추어 데이터를 입력하지 않을 경우 사용

[우선 순위 큐 예시 및 추가설명]
- 예를 들어서 총을 맞은 사람이 오면, 그 앞에 100명이 기다리고 있더라도 모두가 감기 환자일 경우 총을 맞은 사람이 가장 먼저 진료
- 우선순위를 먼저, 힙을 사용하는 우선순위 큐 실행방식
- 가장 위에 위치한 요소인 최대값이나 최소값을 파악해서
- 무언가 추가: 자리 바뀔 가능성
- 무언가 제거 : 꼭대기에서 제거
- 힙은 좋은 성능을 가짐. 삽입과 제거 모두 log n의 시간 복잡도

<br/>

### 어떻게?
- 이전에 최대 이진 힙을 했었기 때문에 최소 이진 힙을 이용하여 병원 혹은 유닉스의 나이스 값이 작동하는 방식대로 낮은 값이 먼저 나오도록 설정
- 우선순위 1이 가장 높은 것이고, 2,3 순으로 낮은 우선 순위 의미
- class 두 개(PriorityQueue, Node)
- 각 인스턴스화 하면 됨. 
- insert와 extractMax 대신에 enqueue와 dequeue 사용


## ▷ 우선 순위 큐(Queue) 솔루션
- Priority_Queue.js

```
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

let ER = new PriorityQueue();
ER.enqueue("common cold", 5)
ER.enqueue("gunshot wound", 1)
ER.enqueue("high fever", 4)
ER.enqueue("broken arm", 2)
ER.enqueue("glass in foot", 3)
```

- class 두 개(PriorityQueue, Node)

[class:Node]
- constructor에서는 val과 priority를 인자로 받음
- val과 priority를 요소로 둠 (= value 값과 우선순위)

[class:PriorityQueue]
- 우선 PriorityQueue 살펴보면, constructor에는 value 빈 배열 값

[enqueue]
- enqueue에서는 val과 priority 인자로 받음(즉 value 값이랑 우선순위를 받음)
- new Node를 이용해서 생성하고 val,priority 인수로
- values에 newNode push
- bubbleUp 실행

[bubbleUp]
- 계속해서 올리는 것(여기서는 숫자값이 낮을 수록 위에 위치)
- idx에 value 마지막꺼 index 넣기
- element에는 해당 값 넣기(values[idx])
- while 반복문 idx > 0
- 부모 인덱스 찾아서 parentIdx에 넣고 : (n-1)/2 하고 내림
- 부모 값 parent에 넣음
- if 조건문 element(=위에선 마지막값)의 우선순위와 부모의 우선순위 값 비교해서 element가 더 높거나 같으면 반복문 중단 (= 숫자 낮을수록 우선순위 ↑ / 숫자 높을 수록 우선순위 ↓ / 즉, element의 숫자 높으면 즉 우선순위 낮으면 스탑)
- 부모 index 값에 element 넣고
- values 마지막 값 담고 있던 것에 부모값 넣고
- idx에는 부모 idx 넣기
- break 까지 계속해서 반복

[dequeue]
- values 첫번째 값을 min에 넣고
- values 마지막 값을 pop 하고 end에 넣음
- 조건문 values.length > 0 일 때
- values[0]에 마지막 값인 end 넣고
- sinkDown 실행
- min 첫값 반환

[sinkDown]
- 맞는 자리 찾도록 내려보냄
- idx에 0 값
- length에 values 배열 길이
- element에 values[0] 첫번째 값
- while(true) 반복
- 왼쪽 자식 노드 index를 leftChildIdx에 (2n+1)
- 오른쪽 자식 노드 index를 rightChildIdx에 (2n+2)
- leftChild, rightChild 선언 / swap에는 null 값

(if 조건문 왼쪽 자식 노드)
- if 조건문 length보다 왼쪽자식노드index 작을경우 실행
- leftChild에 왼쪽노드값 넣기 (values[leftChildIdx])
- if 조건문 왼쪽자식노드값 우선순위가 element(=values첫번째값) 보다 작을 경우
- swap 에 왼쪽자식노드 index 넣음

(if 조건문 오른쪽 자식 노드)
- if 조건문 오른쪽 자식 노드 index가 length보다 작을 경우 실행
- rightChild에 오른쪽 노드 값 넣기
- if 조건문 실행. 
- swap이 null 값이고 오른쪽 노드 우선순위가 element 우선순위보다 작을 경우
- 혹은 swap이 null값이 아니고(swap에 값 있음=왼쪽노드index), 오른쪽 노드 우선순위가 왼쪽 노드 우선순위보다 작을때
- swap에 오른쪽 자식 노드 index 넣음

(if 조건문 break)
- swap이 null 값이면 break 반복문 중단

- values(idx)에 values[swap] 넣어주고 (=index 0에 swap index의 값을 넣어줌)
- values[swap]에 element 넣어주고 (= swap index에 element 넣어줌. 즉 루트값빼기 직전의 배열 마지막값이 index 0으로 갔기 때문에 해당 값이 element임 / 위에서 조건문(왼,오 노드 비교)에 해당하는 값이 swap에 들어갔고 해당 자리에 element 넣음)
- idx = swap 넣어줘서 변경 (=idx 기존에 0이었는데, swap으로 변경해주면서 계속해서 위치 변경 위한 준비)

<br/>
<br/>

# 🐣 이진 힙의 빅오 : Big O  <span id="6">
(Big O 이미지)
- Insertion : O(log N)
- Removal : O(log N)
- Search : O(N)

(Big O 그래프)
- o(log n)의 경우 매우 빠른 편
- log n 이라하지만 사실 log2 n

## 왜 log n ?
(200 이미지)
- 어떤 이진 트리 구조에서든지 한 칸을 내려갈 때마다 2배의 노드가 더 생김
- 힙에 있는 레벨 하나당 한 번의 비교 [1]
- 가장 먼저 첫 번째 부모인 9와 비교 (모든 것 왼쪽에 먼저 삽입 필요)
- 200은 9요소의 자식 됨
- 이제 비교 시작
- 부모와 비교 [2] 9의 부모인 17과 비교
- [3] 17의 부모인 19와 비교
- [4] 19의 부모인 100과 비교
- 각 층마다 비교하여 네 번의 비교를 함

## 왜 n ? 
- 형제 노드 사이에 주어진 순서가 없음
- 결정을 내릴 수가 없음. 어딘가에 있겠지란 접근은 가능하지만 정확하지는 않음
- 실제로는 확인을 해보면 탐색에 대한 빅오값은 빅오(n/2)
- 단순화 시켜서 빅오 n 으로 표기 (나누기 2, 곱하기 100 등은 단순화 시킴)