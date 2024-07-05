<a href="#1">🐣 단일 연결 리스트 </a> <br/>
<a href="#2">🐣 단일 연결 리스트 : push 메소드</a> <br/>
<a href="#3">🐣 단일 연결 리스트 : pop 메소드</a> <br/>
<a href="#4">🐣 단일 연결 리스트 : shift 메소드</a> <br/>
<a href="#5">🐣 단일 연결 리스트 : unshift 메소드</a> <br/>
<a href="#6">🐣 단일 연결 리스트 : get 메소드</a> <br/>
<a href="#7">🐣 단일 연결 리스트 : set 메소드</a> <br/>
<a href="#8">🐣 단일 연결 리스트 : insert 메소드</a> <br/>
<a href="#9">🐣 단일 연결 리스트 : remove 메소드</a> <br/>
<a href="#10">🐣 단일 연결 리스트 : reverse 메소드</a> <br/>
<a href="#11">🐣 단일 연결 리스트 : 빅오 복잡도</a> <br/>
- [단일 연결 리스트 slide](https://cs.slides.com/colt_steele/singly-linked-lists)
- [Linked Lists - Visualgo](https://visualgo.net/en/list?slide=1)
- Singly_Linked_List_Push.js
- Singly_Linked_List_Pop.js
- Singly_Linked_List_Shift.js
- Singly_Linked_List_Unshft.js
- Singly_Linked_List_Get.js
- Singly_Linked_List_Set.js
- Singly_Linked_List_Insert.js
- Singly_Linked_List_Remove.js
- Singly_Linked_List_Reverse.js

<br/>
<br/>

# 🐣 단일 연결 리스트  <span id="1">
## 연결 리스트란?
- 문자열, 숫자 등 무엇이든 원하는 데이터를 저장하는 자료구조
- array처럼 순서에 따라 다수의 데이터를 저장
- 차이점은 array의 경우 각 데이터 element들은 위치가 지정(index)
- 연결 리스트들은 다음 데이터 엘리먼트를 가리키는 인텍스 없이 그냥 다수의 데이터 엘리먼트들로 구성
- 객차들이 연속으로 연결되어 있는 기차와 같음
- 예를들어 5번째 data 알려줘 불가 / 1번째, 2번째 순서대로 data element 접근하고 5번째에 접근 가능
- 각 element를 node라고 부름
- 연결 리스트들은 다수의 노드들로 구성되고, 각각의 노드는 문자열 혹은 수자와 같은 하나의 데이터 엘리먼트를 저장
- 각 노드들은 다음 노드를 가리키는 정보 역시 저장하고 있어야 하며, 더 이상 다음 노드가 없을 경우 아무것도 없음을 의미하는 "null"을 저장
- 세 가지 속성 살펴보면, 헤드·테일·길이 존재
- "헤드"는 연결 리스트의 시작 노드를 가리킴.
- "테일"은 연결 리스트의 마지막 노드를 가리킴. 중간에 있는 노드들은 일일이 추적하지 않음.
- 헤드 노드가 어디 있는지만 알고 있을 것이며, 이 헤드 노드부터 다음 두 번째 노드를 알아내고, 두 번째 노드에서 세 번째 노드를 알아 내는 식으로 마지막 노드까지 접근.
- 작업을 용이하게 하기 위해 마지막 세 번째 속성인 연결 리스트의 "길이"를 계속 유지할 것
<br/>

## 다이어그램과 함께 살펴보기
<img src="https://raw.githubusercontent.com/haileyham/algorithm/d3921e7b9a62a013ce2696b70fdabc6534122b3b/%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0/%EB%8B%A8%EC%9D%BC%20%EC%97%B0%EA%B2%B0%20%EB%A6%AC%EC%8A%A4%ED%8A%B8/singlyLinkedLists.png">
- 연결 리스트 구성 알려주는 다이어그램
- index 없고, list 무엇인가 접근하고 싶으면 첫 번째 노드부터 시작해야 함
- next 포인터 통해 이동 가능
- 두 번째 노드에 접근하고 싶다면, 첫 번째 노드부터 싲가해서 "6"을 저장하고 있는 다음 노드에 대해 물어봐야 함
- 최종적으로 마지막에서 두 번째 노드에 이를 때까지 계속해서 다음 노드에 대한 정보를 요청해야 함
- 연결 리스트는 단지 다음 노드들을 가리키고 있는 수 많은 노드들이라고 보면 됨
- 하나의 노드는 다음 노드를 가리키고, 다음 노드는 또 다음 노드를 가리키는 식
- 엘레베이터와 계단을 생각하면 됨
- array의 경우 엘레베이터여서 5층 가고싶다면, 바로 5층 가면 됨
- 연결리스트의 경우 5층을 가려면 계단 통해서 1~5층 순서대로 올라가야 함
- 단방향 연결 리스트라는 용어는 각 노드가 다음 노드로 오직 단일 방향으로만 연결되었다는 사실에서 유래

## 장단점?
- 새로운 항목을 추가하거나 기존 항목을 제거할 경우 연결 리스트를 사용하면 매우 편리
- 연결 리스트들을 사용해야 가장 중요한 이유는 연결 리스트을 사용할 경우 "삽입"과 "제거"를 쉽게 할 수 있다는 것
- 특히 임의 접근이 필요하지 않은 아주 긴 데이터 세트나 많은 정보에 대하여 작업할 경우 혹은 그냥 리스트에 저장만 하면 될 경우 연결 리스트를 사용하는 것이 바람직
- 접근할 때는 array가 편리. index 존재하기 때문.

<br/>
<br/>

# 🐣  단일 연결 리스트 : push 메소드 <span id="2">
## 코드 스타터 Node 만들기
- 연결 리스트는 단지 노드들의 집합이라는 것
- 각 노드를 위한 클래스를 정의하는 것으로 시작
- 노드는 단지 "val" 혹은 "value"로 불리는 단일 데이터 항목을 저장하고 이어서 호출될 다음 노드들에 대한 참조 정보인 "next"를 저장
- constructor를 추가해야 하고 무엇이 되었던지 간에 "val"을 인자로 받아 들이도록 함.
- 그리고 "this.val"이 "val"과 동일한 값으로 설정되도록 하고, 처음에는 아직 다음 노드가 없기 때문에 "this.next"는 "null"로 초기화되도록.
- 이는 실제로 노드를 위해 필요한 모든 것

```
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
```

## push 소개
- 아래처럼 next를 계쏙해서 추가할 경우 비효율적임
- 그래서 first.push를 함
- 일단은 first에 next를 통해서 계속해서 다음 노드 접근

```
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

let first = new Node("Hi")
first.next = new Node("there")
first.next.next = new Node("how")
first.next.next = new Node("are")
first.next.next = new Node("you")

first.push("you") // 앞으로 해야할 것
```

<br/>

## push 해결법
- 위에서 살펴본 것처럼하면 계쏙해서 이어질 경우 비효율적
- list.push()와 같은 것이 필요
- 아래 코드를 함께 살펴보쟝~
```
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
}

var list = new SinglyLinkedList()
// list.push("HELLO")
// list.push("GOODBYE")

// list.head // "HELLO"
// list.head.next // "GOODBYE"
// list.head.next.next // null
```
- SinglyLinkedList 라는 class 새롭게 만들어서
- constructor에 head, tail, length 속성 만듦
- 각 null, null, 0
- 그리고 push method 만들어서 val을 받고
- 위에서 let first = new Node("글자")했던 것 처럼
- push 메소드 안에 var newNode = new Node(val); 받음
- 만약 head가 없다면 head에 newNode 부여하고, tail에는 head
- head가 있다면 tail의 next에 newNode 연결하고, tail에는 또 다시 newNode 연결
- 그리고 newNode가 있으면 lenght를 항상 ++ 해주고
- return은 this를 해줘서 전체 리스트를 반환하도록 함. 즉 SinglyLinkedList 인스턴스를 가리킴(=list를 가리킴)
- list에서 new SinglyLinkedList 인스턴스 생성했기 때문에 this는 list 자체를 나타냄(= this는 SinglyLinkedList 클래스의 인스턴스인 list를 나타냄)
- (참고)인스턴스는 클래스에서 생성된 특정 개체로, 이 맥락에서 list는 SinglyLinkedList 클래스의 인스턴스

<br/>
<br/>

# 🐣 단일 연결 리스트 : pop 메소드  <span id="3">
## pop 소개
- array에서처럼 pop() 호출하면 연결 리스트의 맨 마지막에서 노드를 제거
- pop()은 마지막 노드, 즉 tail을 반환
- node를 계속해서 추적해오고 있었기 때문에 마지막 노드를 반환하면 되는데, 이를 제거해야 함
- 마지막 노드를 제거했다는 것은 tail이 새로운 node 를 가리키도록 해야 함
- 역방향 포인터를 가지고 있지 않기 때문에 처음부터 리스트를 계속 따라가야만 가능(tail로부터 그 전 노드를 그냥 알아낼 수는 없음ㅠ)
- tail을 업데이트 하는 것이 관건!_!
- 처음부터 시작해서 테일이 다음 노드를 가리키게 하고 다시 마지막에서 두 번째인 그 다음 노드 정보를 추출한 다음 테일이 그것을 가리키도록 하는 것!
<br/>

### 어떻게 해?
- 마지막에서 두 번째 노드를 어떻게 확인할까?
- 예를들어 80 - 81 - 85 가 연결되어 있다고 가정했을 때,
- 첫 번째 변수가 마지막 노드에 다다르게 되면 마지막에서 한 노드 전 노드의 오프셋을 갖게 됨.
- "pre"라는 변수가 있으면, (이전 노드, 마지막에서 두 번째 노드, 새로운 테일 등 뭐라고 불러도 상관 없음)
- 이 변수가 tail로 새롭게 설정하려는 노드의 정보를 추적하는 역할.
- 지금은 마지막에서 두 번째 노드를 찾으려고 하고.
- 마지막에서 두 번째 노드를 찾아서 이제 "85"를 제거하는데, 이 노드의 "this.next"를 "null" 값으로 설정하는 것을 의미.
- 당연히 연결을 끊어내고, 변수에 저장한 후 반환하면 됨.
- 그리고 이전 것을 새로운 tail로 만듦.
- list를 따라가는 것은 head를 이용해서 처음부터 .next 통해서 반복적으로 따라가면 됨


<br/>

## pop 해결법
```
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;

    }
}


var list = new SinglyLinkedList()
list.push("HELLO") 
list.push("GOODBYE")
list.push("!")
```
- pop은 인자 안 받음.
- pop()에서 head가 없으면 undefined 반환
- 변수 current에는 head를
- 변수 newTail에는 current를
- current.next가 존재하는 동안 newTail에는 계속해서 current를 넣고, current에는 계속해서 current.next를 넣음
- 즉, current 처음에 current는 head고, next가 있을 때는 계속해서 current.next값이 들어가고
- newTail은 처음에 current이고(=head), next가 있을 때는 계속해서 current(head,current.next, current.next...)로 들어감
- current가 원래 tail이고, newTail이 원래 tail 한 단계 전꺼라고 생각하면 됨(마지막에서 두번째노드).
- 반복문 끝나면 tail에 newTail이 들어가고
- tail.next는 null 처리
- length는 --;
- 만약 length가 0이면 head랑 tail 둘 다 null
- 최종 current 반환(제거한 노드 반환-기존 마지막 노드)

```
1. head없으면(=리스트 없으면) undefined
2. current 초깃값은 head인데, current.next(연결노드)가 있을 경우 current.next를 가리킴.
3. newTail의 초깃값은 current 즉 haed인데 , 연결노드가 있을 경우 current를 가리킴
4. 2-3번을 요약하면 current는 노드의 젤 마지막이고 / newTail은 노드 마지막에서 두번째임
5. 반복문 나와서 tail에는 newTail을 넣고, tail.next는 null처리해줌(pop 즉 노드제거)
6. length -- 해주고 length가 0이라면 head랑 tail null처리 해줌
7. current를 return 해주는데 current는 제거한 노드임
```

<br/>
<br/>

# 🐣  단일 연결 리스트 : shift 메소드 <span id="4">
##  소개
- shift() 메소드는 연결 리스트 앞에서 노드를 제거
- 현재 head가 가리키고 있는 node 제거 후에 head는 head.next로 대체(리스트 두번째 노드를 가리키도록 함)
- array의 경우 수 백만 개의 노드가 존재할 때, 앞에 노드 제거할 때마다 리스트 따라가면서 index 계속 변경해야하지만
- 연결 리스트의 경우 아주 간단함
<br/>

### 어떻게?
- 노드가 없을 경우 "undefine"를 반환. 
- 노드가 존재할 경우 현재의 헤드 속성을 변수에 저장하고 현재 헤드의 "next" 노드를 가리키도록 헤드 속성을 업데이트
- 즉, 한 칸을 이동 
- 그리고 마지막으로 리스트의 길이를 "1"만큼 감소시키고
- 제거된 이전 헤드 노드의 값을 반환
<br/>

##  해결법
```
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
//(push, pop 생략)
    shift(){
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;
    }
}

var list = new SinglyLinkedList()
list.push("HELLO") 
list.push("GOODBYE") 
list.push("!")
```

- head 없을 경우 undefined 반환
- currentHead에 head를 넣고, this.head에 currentHead.next;를 넣음
- 즉 this.head에다가 리스트의 두 번째 노드를 넣는 것(기존의 head는 사라짐)
- 그리고 length --; 해줌
- length가 0이면 tail은 null (리스트가 2개 남았을 때 shift 사용하면 나머지 한개만 남았기 때문에 head와 tail이 동일함 / 그 상태에서 shift할 경우 head는 null인데 tail은 null처리가 안 되어 있음 그렇기에 if 문 추가함)
- currentHead 즉, 새로운 head (기존의 리스트에서 두번째 노드)를 반환해줌

<br/>
<br/>

# 🐣  단일 연결 리스트 : unshft 메소드 <span id="5">
##  소개
- "unshift( )"는 새로운 노드를 리스트 맨 앞에 추가하는 한 방법
- head가 이미 정의되어 있기 때문에 
- 새로운 head를 리스트 앞에 추가하고
- 새로운 head가 이전 head를 가리키게 하면 됨
<br/>

### 어떻게?
- 새로운 노드 생성
- head 여부 체크, 없을 경우 head와 tail 모두 새로운 node 가리키도록
- node 이미 있을 경우, 새롭게 생성된 node의 next를 현재 head 값으로 설정
- 새로운 리스트 노드는 head가 되고, length는 ++

<br/>

##  해결법
```
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
// (생략 push, pop, shift)
    unshift(val){
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
}

var list = new SinglyLinkedList()
```

- val 인자를 받음 list.unshift("추가") 이런식으로
- var newNode = new Node(val); 인스턴스 생성
- 만약 head 없으면 새로운 newNode를 head값으로, tail은 this.head로
- head가 있으면 newNode.next에 기존의 head 값을(this.head)
- head 값에는 newNode를 가리키도록
- 그 다음 length는 ++ 해주고, this를 반환
- 여기서 this는 인스턴스를 가리키기 때문에 list 객체 반환 해줌

<br/>
<br/>

# 🐣  단일 연결 리스트 : get <span id="6">
##  소개
- get( )은 인덱스 혹은 위치를 의미하는 숫자를 인자로 받아서 '주어진 위치에 있는 노드를 반환'하는 메소드
- "0"을 인자로 주면 첫 번째이기 때문에 헤드를 반환.
- 만약 "4"를 인자로 주게 되면 이것은 다섯 번째 노드를 반환해야 합니다. 위치 인덱스가 "0"으로 시작하기 때문
- 중요한 점은 주어진 숫자 만큼 리스트를 따라간 후 해당 위치의 노드를 반환
- 리스트에는 각 개별 노드와 일치하는 index 존재하지 않음
- 맨 처음인 "0"부터 몇 번이나 이동했는지 계속 추적하면서 주어진 숫자만큼 반복될 때까지 계속 ".next"을 통해 이동. 리스트에서는 인덱스에 대해 언급될 때 마다, 리스트의 경우 직접 수동으로 세어보는 것
- array의 경우 내장 index를 지니고 있음
- 위치를 기준으로 접근을 해야한다면 array를 사용하는 것이 효과적

<br/>

### 어떻게?
- function은 입력된 숫자인 index를 인자로 받음
- index 범위에 따라 edge 케이스 있을 수 있음
- 인덱스가 음수이거나 혹은 리스트의 길이보다 같거나 클 경우 동작할 수 없음
- 예를들면 "-2"에서는 아무것도 찾을 수 없음(null 반환 혹은 undefined이지만, 그냥 요청된 노드를 찾지 못했다는 것을 의미하는 무엇인가를 반환)
- 루프를 통해 인덱스가 지정하는 위치에 이를 때까지 반복해서 이동한 다음 해당 인덱스 위치에 있는 노드를 반환
- 이동한 회수를 추적하는 "counter" 변수를 사용해서, 이전 "while" 루프에서 한 것 처럼, 루프 내부에서 ".next"를 반복하기를 권장
- 매번 이동할 때마다 "counter" 변수를 "1"만큼 증가
- 인덱스가 다섯 번째든 열 번째든 그냥 그 값을 반환

<br/>

##  해결법
```
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    // (생략 push, pop, shift, unshift)

    get(index){
        if(index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }
}

var list = new SinglyLinkedList()
```

- index를 인자로 받음
- 만약 index가 음수이거나 index가 lenght보다 클 경우 null 반환
- counter 초깃값은 0 
- current 초깃값은 head
- counter가 index랑 같지 않을 동안 반복문 실행
- current는 current.next를 가리킴 (계속해서 next)
- counter는 계속해서 ++ 하면서 몇번째에 있는지 세는 것임
- current를 반환함. 즉, 입력한 index 인자 위치에 해당하는 값을 반환함(음수,length넘은것,counter가 index가 동일할 때의 조건 만족하는 current임)

<br/>
<br/>

# 🐣  단일 연결 리스트 : set <span id="7">
##  소개
- "set( )"은 위치 혹은 인덱스와 해당 인덱스에 위치한 노드를 업데이트할 값 등 두 개의 인자를 받음
- 예를들어 "list.set(1, "HELLO WORLD!")"라고 한다면? 
- 인덱스로 주어진 "1"에 위치한 노드를 "HELLO WORLD!"로 업데이트 혹은 수정하라는 의미
<br/>

### 어떻게?
- index를 받아들이도록 함. index와 값
- get() 메소드 활용 : 원하는 위치의 노드값을 찾기 위해서(노드값 없을 경우 get에서 알아서 처리)
- 원하는 노드 찾았을 경우 노드 값 업데이트하고 true 반환, 못 찾으면 false 반환

<br/>

##  해결법
```
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // (생략 push, pop, shift, unshift, get)

    set(index, val){
        var foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }
}

var list = new SinglyLinkedList()


list.push("HELLO")  
list.push("GOODBYE") 
list.push("!") 
list.push("<3")
list.push(":P") 
```

- 우선 index와 함께 변경할 값 인자로 받음(2개)
- 그리고 foundNode에 get 메소드 호출하여 해당 index 노드 값을 받음
- if 조건문을 통해 foundNode 값 있을 경우 foundeNode.val을 인자로 받은 val 값으로 업데이트해주고 true 반환
- (참고) val은 construcotr에 있음
- 만약 foundNode 값이 없을 경우 false 반환
- 예를들어 위에서 set(2,"!!!?") 할 경우 기존 2(3번째위치)의 ! 값이 !!!?로 대체됨

<br/>

### (참고) 

```
class Node{
    constructor(val){
        this.val = val; // this는 생성되는 인스턴스를 가리킴
        this.next = null;
    }
}
```

- 여기서  생성자 내의 this는 instance 가리키는데 this 자체는 호출된 객체 자체를 가리킴(Node 새롭게 생성된 instance)
- this.val 할 경우 해당 Node 객체의 val 속성

```
        var foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            //생략}
```

- 여기서 살펴보면 foundNode에서 get을 통해 해당 Node 가리킴
- Node 가져오면 그 val 값을 수정하는 것임

<br/>
<br/>

# 🐣  단일 연결 리스트 : insert <span id="8">
##  소개
-  "insert( )" 메소드는 두 개의 인자를 받아 들였던 "set( )"과 같이 인덱스 및 값은 받아들임
- 하지만 이미 존재하는 노드를 업데이트하는 대신 "insert( )"는 주어진 노드를 그곳이 어디던 주어진 위치에 새롭게 삽입한다는 차이점 있음
- 예를 들어 [22,2,77,6,43,76,89]에서 번호 "17"을 "2" 위치에, "0", "1", "2" 삽입하라고 하면, 새로운 노드 "17"을 삽입한 후 이 노드와 연결하고 다시 "77"과 연결하게 됨(17을 인덱스 2에 두고 싶기 때문에 기존 77 자리에 17이 들어가고 77은 17 다음으로 연결, 2 다음에는 17이 오도록)
- 인덱스 2를 지정할 경우, 인덱스 1 위치에 있는 노드를 찾아 새로운 노드에 연결(17을 연결)

<br/>

### 어떻게?
- function 정의 후에 index와 value 두 개 인자 받음
- 범위 벗어날 경우 insert 불가하기 때문에
- index 0보다 작거나 리스트의 lenght보다 클 경우(크거나 같을 경우가 아닌 클경우임. get에서는 lenght보다 크거나 같을 경우였음) false 반환
- 인덱스가 길이와 같을 경우는 리스트의 맨 마지막에 삽입하면 되기 때문이며, 이 경우 이미 정의되어 있는 "push( )" 메소드를 호출할 수 있음(즉, 리스트의 맨 마지막에 삽입하기를 원할 경우 다시 작성할 필요 없이 "push( )"를 활용)
- 마찬가지로 리스트의 맨 앞에 새로운 노드를 삽입하기를 원한다면 "unshift( )" 메소드를 활용
- [예시]
- 먼저 새 노드를 생성
- 인덱스 "3"을 예를 들면, 처음해야 할 일은 "2" 위치에 있는 노드를 찾는 것이고, 이를 위해서 이미 "get( )" 메소드가 정의되어 있기 때문에 그냥 호출하면 됨. 대신 "index - 1"으로 호출해야 함(인덱스 위치에 있는 노드가 아니라 인덱스보다 하나 전에 위치한 노드를 찾는 것)
- 따라서 노드 "17"을 인덱스 "2" 위치 에 삽입하기를 원할 경우 "get(1)"을 호출
- 이제 새롭게 노드를 삽입하려는 위치 바로 전 노드가 어떤 것인지 알기 때문에, 이전 노드의 "next"가 새롭게 생성된 후 삽입되는 노드를 가리키도록 설정
- "get( )" 메소드를 이용해 삽입하려는 위치 이전 노드를 찾고 이것을 새 노드에 연결. 그리고는 새 노드를 이전의 "next" 노드로 연결
- 굳이 어떤 것을 먼저 연결해야 한다는 순서는 없지만, 잠시 동안 연결점을 저장해 두는 임시 변수를 사용해야 함
- 이제 마지막으로 해야 할 것은 지금 막 노드를 하나 삽입했기 때문에 길이를 "1"만큼 증가시키는 것과 "true"을 반환하는 것

<br/>

##  해결법
```
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

   // (생략 push, pop, shift, unshift, get, set)

    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);
        
        var newNode = new Node(val);
        var prev = this.get(index - 1);
        var temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
}

var list = new SinglyLinkedList()

list.push(100)
list.push(201)
list.push(250)
list.push(350)
```

- 우선 index 보다 작거나, lenght보다 큰 것은 false 반환
- index가 length와 같을 경우 해당 val 은 push
- index가 0일 경우 해당 val은 unshift
- !!을 붙이는 이유는 전체 boolean으로 반환하기 위해서 통일감(그냥 return this.push(val) 할 경우 전체 객체 반환하기 때문)
- newNode 새로 노드 작성
- prev를 만들어서 get을 통해 index-1 노드 객체 담음
- temp 에다가 prev.next 
- 기존에 [1,2,3,4]에서 index 2 (=3번째 즉 3)에다가 insert 할 경우 prev는 2이고, temp는 3임
- 그리고서 prev.next에 새로 만든 newNode 연결
- newNode.next에는 기존의 index 2에 위치했던 것을 담은 temp 연결
- length ++ 해주고 true 반환

<br/>
<br/>

# 🐣  단일 연결 리스트 : remove <span id="9">
##  소개
- "remove( )"는 인덱스를 인자로 받아서 해당 인덱스에 있는 노드를 제거하고 주위에 있는 것들을 연결

<br/>

### 어떻게?
- index를 인자로 받고
- index 값이 0보다 작거나 length보다 길 경우 undefined 혹은 null 반환
- 만약 index가 length-1과 같을 경우 마지막 노드를 제거하면 되기 때문에 pop(); (참고로 5개 리스트 존재할 경우 index는 4까지만 존재하기 때문에 length-1인 것으로 마지막 요소를 가리킴)
- 또 반대로 index가 0일 경우에는 shift() 사용하면 됨
- 위의 가정이 아닌 경우 get() 사용하여 .next는 이전 노드의 next로 연결해줌
- 마지막으로 lenght -- 해주고, 제거된 노드 반환

<br/>

##  해결법
```
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

   // (생략 push, pop, shift, unshift, get, set, insert)
   
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        var previousNode = this.get(index - 1);
        var removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }
}

var list = new SinglyLinkedList()

list.push(100)
list.push(201)
list.push(250)
list.push(350)
```

- index 0보다 작거나 lenght보다 길거나 같으면 undefined 반환
- index 0 이면 shift, length - 1과 같으면 pop 반환
- previousNode에는 get 이용해서 index - 1 노드 가져오고
- removed에는 제거할 previousNode.next를 담음 (즉 해당 index)
- 그리고 previousNode.next에는 removed.next를 담아줌(즉 제거하는 index의 다음꺼를 previous 다음껄로 연결)
- length -- 해주고 removed 반환해줌

<br/>
<br/>

# 🐣  단일 연결 리스트 : reverse <span id="10">
##  소개
- 주어진 연결 리스트의 노드 순서가 역으로 연결되도록 해야함
- 리스트를 따라가면서 순서를 계속 역으로 바꿔 나가야 함

<br/>

### 어떻게?
- 인자를 받지 않고 리스트 순 역으로 작성해보쟝
- head와 tail을 서로 교환하고 next, prev,node라는 변수 생성
- node를 현재 head 값으로 초기화
- node의 .next를 .next.next 계속해서 설정하는 작업 
- reverse() 메소드 구현할때 print() 메소드 통해서 reverse( ) 메소드가 제대로 동작하는지 확인하는 것을 조금 더 쉽게.

<br/>

##  해결법
```
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

   // (생략 push, pop, shift, unshift, get, set, insert, remove)
   
    reverse(){
      var node = this.head;
      this.head = this.tail;
      this.tail = node;
      var next;
      var prev = null;
      for(var i = 0; i < this.length; i++){
        next = node.next;
        node.next = prev;
        prev = node;
        node = next;
      }
      return this;
    }

    print(){
    var arr = [];
    var current = this.head
    while(current){
        arr.push(current.val)
        current = current.next
      }
        console.log(arr);
    }
}

ar list = new SinglyLinkedList()

list.push(100)
list.push(201)
list.push(250)
list.push(350)
list.push(999)
```

- print는 reverse가 잘 동작하는지 확인용
- reverse에서 node에 head를 넣고
- head에는 tail을 넣고, tail에는 node 넣어줌
- 즉 node가 head이고 tail이 node이자 head
- next 변수 선언하고, prev에는 null 값 할당(null값인 이유는 node tail의 next에는 null값이기 때문에)
- 반복문 for을 이용하여 돌리고
- next에는 node.next를
- node.next에는 prev를
- prev에는 node를
- node에는 next를 넣어줌
- 마지막으로 this 반환(instance 리스트 객체 반환)


<br/>
<br/>

# 🐣  단일 연결 리스트 : 빅오 표기법 <span id="11">
- insertion : O(1)
- removal : O(1) or O(n)
- searching : O(n)
- access : O(n)
- removal의 경우 앞에서 삭제하면 간단하지만 끝의 경우 pop하면서 삭제한 이전의 것을 알기위해 훑어가야 하기 때문
- 스택, 큐 등에서 단방향 연결 리스트 개념 필요