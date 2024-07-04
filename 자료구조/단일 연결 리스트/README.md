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

<br/>

## pop 해결법

<br/>
<br/>

# 🐣  단일 연결 리스트 : shift 메소드 <span id="4">
##  소개

<br/>

##  해결법

<br/>
<br/>

# 🐣  단일 연결 리스트 : unshft 메소드 <span id="5">
##  소개

<br/>

##  해결법

<br/>
<br/>

# 🐣  단일 연결 리스트 : get <span id="6">
##  소개

<br/>

##  해결법

<br/>
<br/>

# 🐣  단일 연결 리스트 : set <span id="7">
##  소개

<br/>

##  해결법

<br/>
<br/>

# 🐣  단일 연결 리스트 : insert <span id="8">
##  소개

<br/>

##  해결법

<br/>
<br/>

# 🐣  단일 연결 리스트 : remove <span id="9">
##  소개

<br/>

##  해결법


<br/>
<br/>

# 🐣  단일 연결 리스트 : reverse <span id="10">
##  소개

<br/>

##  해결법


<br/>
<br/>

# 🐣  단일 연결 리스트 : 빅오 표기법 <span id="11">