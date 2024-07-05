<a href="#1">🐣 이중 연결 리스트 & Node class</a> <br/>
<a href="#2">🐣 이중 연결 리스트 : push 메소드</a> <br/>
<a href="#3">🐣 이중 연결 리스트 : pop 메소드</a> <br/>
<a href="#4">🐣 이중 연결 리스트 : shift 메소드</a> <br/>
<a href="#5">🐣 이중 연결 리스트 : unshift 메소드</a> <br/>
<a href="#6">🐣 이중 연결 리스트 : get 메소드</a> <br/>
<a href="#7">🐣 이중 연결 리스트 : set 메소드</a> <br/>
<a href="#8">🐣 이중 연결 리스트 : insert 메소드</a> <br/>
<a href="#9">🐣 이중 연결 리스트 : remove 메소드</a> <br/>
<a href="#11">🐣 이중 연결 리스트 vs 단일 연결 리스트</a> <br/>
- [이중 연결 리스트 slide](https://cs.slides.com/colt_steele/doubly-linked-lists)
- [Linked Lists - Visualgo](https://visualgo.net/en/list?slide=1)
- DDL_Classes.js
- DDL_Push.js
- DDL_Pop.js
- DDL_Shift.js
- DDL_Unshft.js
- DDL_Get.js
- DDL_Set.js
- DDL_Insert.js
- DDL_Remove.js

<br/>
<br/>

# 🐣 이중 연결 리스트  <span id="1">
(doublyLinkedLists.png)
- 단일 연결 리스트에서 크게 다를 것은 없지만
- 뒤로 가는 방향을 가리키는 것이 노드마다 하나씩 더 추가 됨
- 두 개의 포인터가 있음
- 단일 연결 리스트에서 마지막 요소를 제거하는 pop할 경우 마지막에서 두번째 요소 찾아서 새로운 tail 만들어야 함(일일이 node 훑어야함)
- 이중 연결 리스트의 경우 pop할 기존의 tail에서 뒤로가서 마지막에서 두 번째 요소 찾을 수 잇음
- next만 저장하는 것이 아닌 previous까지 함께 저장(양방향)
- 단일 연결 리스트보다 효율적이지만 메모리가 더 듦

<br/>

## 코드 스타터 Node 만들기
```
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
}
```
- 단일 연결리스트와 다른점은 Node constructor에 prev 추가

<br/>
<br/>

# 🐣  이중 연결 리스트 : push 메소드 <span id="2">
## push 소개
- 끝에 데이터 추가하고 tail에 .next를 새로운 테일로 지정해서 연결
- 반대 방향으로도 연결
<br/>

### 어떻게?
- 우선 추가할 노드를 만들고
- head가 null인지 length가 0인지 확인
- 새로운 노드로 설정해주고, 기존 tail의 next를 새로운 노드로 대체해주고 방향성 연결(양방향)

<br/>

## push 해결법
```
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
}
```
- val 인자로 받고, new Node 추가
- length가 0이면 head랑 tail에 newNode 추가
- 리스트있으면 tail.next에 newNode 추가 연결 해주고
- 기존의 tail은 newNode의 prev로 넣어주고
- tail은 newNode가 됨
- 단일 연결 리스트와 다른점은 next만 있는 것이 아닌 prev도 연결해주는 것

<br/>
<br/>

# 🐣 이중 연결 리스트 : pop 메소드  <span id="3">
## pop 소개 및 의사코드
- head나 tail 없거나 lenght가 0 이면 undefined 출력
- tail 전에 있는 node(=prev tail)이 tail로 변경
- 새로운 tail(기존 tail prev였던 node)의 next는 null로 설정
- 기존의 tail 의 prev 값도 null로 설정하여 연결 끊음(앞뒤로)

<br/>

## pop 해결법
```
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
//(생략 push)
    pop(){
        if(!this.head) return undefined;
        var poppedNode = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }
}

var list = new DoublyLinkedList()
list.push("Harry")
list.push("Ron")
list.push("Hermione")
```

- 우선 head 있는지 확인하고 없으며녀 undefined 반환
- popedNode는 뺄 node이기에 기존의 tail을 넣음
- 만약 length가 1이라면 head와 tail 모두 null 처리(length가 1인것에서 pop하면 아무것도 남지 않기 때문에 연결 다 끊음)
- 평범한 것이라면 tail에는 기존 tail의 prev를 담아줌(맨 마지막 것을 pop하기 때문에 기존 tail 대신에, 기존 tail의 전꺼를 tail로 만들어줌)
- tail.next를 null 값 처리해줘서 기존 tail과의 연결 끊음
- popedNode.prev의 prev도 null 처리해줘서 기존 tail의 전 node랑 연결 끊음
- length -- 해주고 popedNode 반환해줌

<br/>
<br/>

# 🐣  이중 연결 리스트 : shift 메소드 <span id="4">
##  소개 및 의사코드
- shift는 맨 앞에서 노드를 하나 제거
- 길이 0 혹은 head 없는지 확인후 undefined 출력
- 기존 head oldHead에 저장해서 마지막에 출력(그냥 제거하면 안됨)
- 길이가 1인 것 제거하면 head랑 tail 모두 null 처리 필요
- head 옮겨주면 되는데 oldHead.next를 head로 만들면 됨
- head의 prev를 null로 설정해야해서 새로운 head의 prev를 null 설정
- oldHead.next(기존 head)도 null 설정해서 연결 끊기

<br/>

##  해결법
```
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

//(생략 push, pop)

    shift(){
        if(this.length === 0) return undefined;
        var oldHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
}

var list = new DoublyLinkedList()
list.push("Harry")
list.push("Ron")
list.push("Hermione")
```
- length 0이면 undefined 반환
- oldHead에 기존 head 담아줌
- 만약 길이 1이면 head랑 tail을 null 처리(길이 1인거 shift하면 0되기 때문)
- 보통의 경우 head에는 oldHead.next를 담아줌(기존 head의 다음꺼)
- 그리고 새로운 head.prev는 null 처리해주고
- 기존의 oldHead.next는 null 처리해서 연결을 끊어줌
- length는 -- 하고, oldHead를 출력함

<br/>
<br/>

# 🐣  이중 연결 리스트 : unshft 메소드 <span id="5">
##  소개 및 의사코드
- 입력값 가지는 새로운 node 필요
- 길이 0이면 head와 tail 모두 newNode로 연결
- 새로운 node의 next가 현재 head가 되도록 설정
- 그리고서 head는 새로운 node로 설정

<br/>

##  해결법
```
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

// (생략 push, pop, shift)

    unshift(val){
        var newNode = new Node(val);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
}

var list = new DoublyLinkedList()
list.push("Harry")
list.push("Ron")
list.push("Hermione")
```

- val을 인자로 받고, new Node 생성
- 길이가 0이면 head랑 tail 모두 newNode로 설정
- 평범한 경우라면, head.prev(기존 head의 prev)에 newNode를 담고
- newNode의 next를 기존 head로 연결시켜줌
- 그리고 head를 newNode로 교체
- length는 ++ 해주고, this를 반환해줌

<br/>
<br/>

# 🐣  이중 연결 리스트 : get <span id="6">
##  소개

<br/>

### 어떻게?

<br/>

##  해결법


<br/>
<br/>

# 🐣  이중 연결 리스트 : set <span id="7">
##  소개

<br/>

### 어떻게?


<br/>

##  해결법

<br/>


<br/>
<br/>

# 🐣  이중 연결 리스트 : insert <span id="8">
##  소개

<br/>

### 어떻게?
<br/>

##  해결법

<br/>
<br/>

# 🐣  이중 연결 리스트 : remove <span id="9">
##  소개

<br/>

### 어떻게?

<br/>

##  해결법

<br/>
<br/>

# 🐣  이중 연결 리스트 vs 단일 연결 리스트 <span id="10">
