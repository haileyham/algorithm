<a href="#1">🐣 stack 스택 </a> <br/>
<a href="#2">🐣 배열로 스택 만들기  </a> <br/>
<a href="#3">🐣 stack.js  </a> <br/>
<a href="#4">🐣 스택의 BigO  </a> <br/>
[stack slide](https://cs.slides.com/colt_steele/stacks)

<br/>
<br/>

# 🐣  스택 stack <span id="1">
## 스택이란?
- 데이터의 모음
- 압축적인 데이터의 구조
- 후입 선출 원칙 (LIFO)
- 선형 데이터 구조
- 가장 먼저 추가한 것이 가장 나중에 제거, 가장 나중에 추가한 것이 가장 먼저 제거
- push, pop
- 사용 사례: 함수 호출 관리, 텍스트 편집기의 실행 취소 메커니즘 및 깊이 우선 검색 알고리즘에 사용

<br/>
<br/>

# 🐣 배열로 스택 만들기 <span id="2">
- 가장 나중에 추가된 것을 가장 먼저 제거
- push, pop 
- unshift, shift
- 배열의 경우 index 자체 부여되기 때문에 unshift, shift의 경우 비효율적
- 데이터가 아주 많고, 후입선출만 지키면 되는 상황이라면, 연결리스트를 이용하는 것이 좋음

<br/>
<br/>

# 🐣 연결리스트를 이용한 stack <span id="3">
## 이런 방식으로 필요
- 단일 연결 리스트를 이용한 스택(기존에 살펴본 shift,unshift 기능을 push,pop으로 할거임)
- 참고로 array, 단일, 이중 연결 리스트 모두 stack 작성 가능
- 이렇게 작동하도록
```
let stack = new Stack();
stack.push("First"); // 1
stack.push("Second"); // 2

stack.pop(); // "Second"
stack.pop(); // "First"
stack.pop(); // null
```

- Node는 value와 next
- stack 클래스의 constructor은 first, last, size(연결 리스트에서처럼 head,tail 그대로 사용해도 되긴 함)

<br/>

## 코드로 살펴보기
```
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
    pop(){
        if(!this.first) return null;
        var temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}
```

- [push]
- push에는 val 인자로 받고
- newNode 
- first(head)가 없을 경우 first, last에 각 newNode 설정
- 보통의 경우, temp에 기존 first 넣고,
- first에 newNode를
- 그리고 다시 first.next에다가 temp를 넣어줌
- 여기서는 this의 size를 ++ (기존 length) 해줌

<br/>

- [pop]
- first(head)가 없다면 null 출력
- temp에 first 넣고
- first와 last가 같을 경우 last에는 null 값을 넣어줌(계속해서 빼다가 first랑 last 같아지면 last에 null값)
- first에 기존 first 다음꺼인 first.next를 넣고
- size는 -- 해주고, 기존 first 값인 temp.value를 출력해줌

<br/>
- 참고로 first를 사용하는 이유는 O(1) 시간 복잡도로 push와 pop을 하기 위해서이며, last를 사용하면 push는 가능하지만 pop은 O(n)이되기 때문임.
- 리스트의 처음에서 삽입,삭제를 하기 때문에 스택 전체 순회할 필요가 없음


<br/>
<br/>

# 🐣 스택의 Big O <span id="4">
- insertion : O(1)
- removal : O(1) 
- searching : O(n)
- access : O(n)

<br/>
- 스택은 삽입과 제거를 제일 우선시 하기 때문에 O(1)을 만들기 위해서
- 기존 단일연결리스트에서 unshift,shift 기능들을 사용하여 stack의 push, pop 기능을 만듦
- 리스트의 처음에서 삽입,삭제를 하기 때문에 스택 전체 순회할 필요가 없음