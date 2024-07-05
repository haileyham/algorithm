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
- 단일 연결 리스트와 다른 점은 prev를 사용할 수 있다는 점
- 앞 혹은 뒤에서부터 작업 시작 가능
- 예를들어 length가 10일 때, 가장 큰 index는 9
- index 7 을 찾고 있다면 list.get(7)한다면, 앞에서부터 찾는 것이 아니라 뒤에서부터 찾아올 수 있음(index 9에서부터 차례로)

<br/>

### 어떻게?
- 먼저 index 유효한지 확인해야해서 음수 or length와 같으면 null 출력(length가 10이면 index 9까지만 있기 때문에 index 10은 찾을 수 없음)
- index가 length의 1/2보다 큰지 작은지 여부 확인
- 작으면 처음부터 찾고, 크면 뒤에서부터 찾음
- [절반보다 작으면] count는 0에서 점점 올라가고, current는 head에서 시작해서 next로 점점 넘어감.
- [절반보다 크면] count는 length - 1에서 시작해서 점점 감소하고, current는 tail에서 시작해서 prev로 넘어옴.

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

// (생략 push, pop, shift, unshift)

    get(index){
        if(index < 0 || index >= this.length) return null;
        var count, current;
        if(index <= this.length/2){
            count = 0;
            current = this.head;
            while(count !== index){
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while(count !== index){
                current = current.prev;
                count--;
            }
        }
        return current;
    }
}

var list = new DoublyLinkedList()
list.push("Harry")
list.push("Ron")
list.push("Hermione")

```

- 먼저 index 유효한지 확인해야해서 음수 or length와 같으면 null 출력(length가 10이면 index 9까지만 있기 때문에 index 10은 찾을 수 없음)
- index가 length의 1/2보다 큰지 작은지 여부 확인
- 작으면 처음부터 찾고, 크면 뒤에서부터 찾음
- [절반보다 작으면] count는 0에서 점점 올라가고, current는 head에서 시작해서 next로 점점 넘어감.
- [절반보다 크면] count는 length - 1에서 시작해서 점점 감소하고, current는 tail에서 시작해서 prev로 넘어옴.
- count와 current는 각 상황에 따라 초기 설정해두고 while 반복문 돌려서(count랑 index랑 같지 않을 경우) current랑 count 조정

<br/>
<br/>

# 🐣  이중 연결 리스트 : set <span id="7">
##  소개 및 의사코드
- get을 호출하여 바꿔주면 됨
- 인수로 index랑 바꿀 val 받음
- get이 null 출력한 것 아닌이상 val 교체하고 true를 반환


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

// (생략 push, pop, shift, unshift, get)

    set(index, val){
        var foundNode = this.get(index);
        if(foundNode != null){
            foundNode.val = val;
            return true;
        }
        return false;
    }
}

var list = new DoublyLinkedList()
list.push("Harry")
list.push("Ron")
list.push("Hermione")

```

- index, val 을 인자로 받음 (index와 교체할 값)
- foundNode를 통해 get(index) 호출하여 해당 노드 객체 구하고
- foundNode가 null이 아니고 해당 index의 node를 반환했으면
- 그 노드에 인자로 받은 val로 교체를 하고
- return 값으로 true 반환. 그렇지 않을 경우 false 출력

<br/>
<br/>

# 🐣  이중 연결 리스트 : insert <span id="8">
##  소개 및 의사코드
- 연결을 많이 해줘야함
- get을 통해 요소 순회하는데 받은 index의 -1값으로 순회(그래야 3번 index 대신에 새로운 값 3번 index에 들어가고, 기존 3번 index는 뒤로 밀리기 때문)
- index-1값 찾아서 newNode의 prev로 연결해주고, next에는 기존 3번 index를 넣어줌
- 기존 index-1에는 next로 newNode 연결해주고, 기존 index에는 prev로 newNode를 연결해줌

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
// (생략 push, pop, shift, unshift, get, set)
    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);

        var newNode = new Node(val);
        var beforeNode = this.get(index-1);
        var afterNode = beforeNode.next;
        
        beforeNode.next = newNode, newNode.prev = beforeNode;
        newNode.next = afterNode, afterNode.prev = newNode;
        this.length++;
        return true;
    }
}

var list = new DoublyLinkedList()
list.push("Harry")
list.push("Ron")
list.push("Hermione")

```

- index랑 삽입할 val을 인자로 받음
- index가 음수이거나 length보다 클 경우 false 반환(insert하는 거기 때문에 같아도 상관없음)
- index 0이면 !!unshift 반환(!! 붙이는 이유는 boolean 값으로 출력하기 위해서임)
- index length랑 같으면 !!push 반환
- 일단 newNode를 생성하고
- beforeNode에 기존의 prev를 넣어줌(index-1)
- afterNode에 기존의 ndoe를 넣어줌(beforeNode.next)
- 그리고 이제 연결을 교체교체~
- beforeNode.next 그리고 afterNode.prev는 newNode로
- newNode.prev는 beforeNode로, newNode.next는 afterNode로!
- 그리고 length ++ 해주고 true 반환!

<br/>
<br/>

# 🐣  이중 연결 리스트 : remove <span id="9">
##  소개 및 의사코드
- 제거할 index get한 다음에 
- 앞뒤 연결 null 해주고 
- 기존의 앞뒤 노드들을 서로 연결해줌

<br/>

##  해결법
```
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}


class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
//(생략 push, pop, shift, unshift, get, set, insert)
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    
    var removedNode = this.get(index);
    var beforeNode = removedNode.prev;
    var afterNode = removedNode.next;
    
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;

    // removedNode.prev.next = removedNode.next;
    // removedNode.next.prev = removedNode.prev;

    removedNode.next = null;
    removedNode.prev = null;

    this.length--;
    return removedNode;
  }
}

var list = new DoublyLinkedList()
list.push("Harry")
list.push("Ron")
list.push("Hermione")

```

- index를 인자로 받고
- index가 음수이거나 length보다 크거나 같을 때 undefined(길이가 10이면 index는 9까지만 있기때문)
- index 0 이면 shift 반환
- index length - 1 이면 pop 반환
- 우선 removedNode를 get(index)를 통해 해당 노드 구하고
- beforeNode에는 삭제할 기존의 노드의 이전꺼를
- afterNode에는 삭제할 기존의 노드의 다음꺼를 넣음
- 그리고 연결을 해주는데
- beforeNode.next에는 afterNode를
- afterNode.prev에는 beforeNode를 연결해줌
- 그리고 삭제할 기존의 노드의 next와 prev는 모두 null처리
- lenght는 -- 해주고, removedNode를 반환해줌 

<br/>
<br/>

# 🐣  이중 연결 리스트 vs 단일 연결 리스트 <span id="10">
## 이중 연결 리스트 Big O
- Insertion : O(1)
- Removal : O(1)
- Searching : O(n)
- Access : O(n)
- Technically searching is : O(n/2) 이지만 결국 O(n)

## Array vs 단일 연결 리스트 vs 이중 연결 리스트
### Array
- 접근 : O(1)
- 검색 : O(n)
- 삽입 : O(n) - 재배치
- 제거 : O(n) - 재배치

<br/>

### 단일 연결 리스트
- 접근 : O(n)
- 검색 : O(n)
- 삽입 : O(1) : 헤드에 삽입하거나 노드를 참조하여 삽입하는 경우
- 제거 : O(1) or O(n) : 헤드를 제거하거나 노드의 이전 노드를 참조하는 경우, O(n)O(n)O(n)(검색하는 경우) 노드의 경우

<br/>

### 이중 연결 리스트
- 접근 : O(n)
- 검색 : O(n)
- 삽입 : O(1)
- 제거 : O(1)

<br/>

### 단일 연결 리스트와 이중 연결 리스트의 차이
#### 메모리 사용량

이중 연결 리스트에는 각 노드에 이전 노드에 대한 추가 포인터가 포함되어 있으므로 더 많은 메모리가 필요

#### 운영 효율성
- 삽입/삭제: 이중 연결 리스트는 삽입하거나 삭제할 노드에 대한 참조가 있는 경우 포인터를 업데이트하기 위해 목록을 탐색할 필요가 없기 때문에 삽입 및 삭제를 보다 효율적으로 수행 가능.
- 순회: 이중 연결 리스트는 양방향 순회(앞으로 및 뒤로)를 허용하는 반면, 단일 연결 리스트는 단방향 순회(앞으로)만 허용

#### 구현의 복잡성
이중 연결 리스트는 추가 포인터와 삽입 및 삭제 중에 '다음' 및 '이전' 포인터를 모두 업데이트해야 하기 때문에 구현 및 관리가 더 복잡함.