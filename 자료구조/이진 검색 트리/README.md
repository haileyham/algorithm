<a href="#1">🐣 트리</a> <br/>
<a href="#2">🐣 트리 사용</a> <br/>
<a href="#3">🐣 이진 트리</a> <br/>
<a href="#4">🐣 트리 클래스</a> <br/>
<a href="#5">🐣 이진 검색 트리(BST) : insert </a> <br/>
<a href="#6">🐣 이진 검색 트리 : find</a> <br/>
<a href="#7">🐣 이진 검색 트리 : Big O</a> <br/>
- [이진 검색 트리 slide](https://cs.slides.com/colt_steele/trees)
- [Binary Search Tree, AVL Tree - Visualgo](https://visualgo.net/en/bst?slide=1)
- BST_Classes.js
- BST_Insert.js
- BST_Find.js

<br/>
<br/>

# 🐣 트리  <span id="1">
## 트리란?
- 연결 리스트처럼 노드로 이루어진 데이터 구조
- 노드들 사이에 부모-자식 관계 존재
- 결과적으로 가지(branch)를 가짐
- 한 노드는 다른 노드로 연결되어 있는데 2개나 3개 10개 아니면 0개가 될 수도 있음

## 설명
- (Trees.png 이미지 참고)
- 각각의 동그라미가 노드
- 연결 리스트와 달리 각 노드는 한 개가 아닌 그 이상의 다른 노드를 가리킬 수 있음
- 꼭대기의 2 번의 경우 루트
- 노드들은 각각 한 개나 그 이상이나 또는 0개의 노드를 가리킬 수 있음
- 트리는 비선형구조 (리스트는 선형 구조)
- 트리는 한 갈래 말고도 여러 가지들이 뻗을 수 있고, 연결 리스트는 한 갈래로만 뻗어 나감
- 단일 연결 리스트도 트리, 특별한 케이스의 트리
- 트리는 부모-자식 관계에서만 부모가 자식인 노드를 가리킬 수 있고, 자식이 부모를 가리킬 수 없음
- 형제를 가리키면 안되고, 그 경우에는 그래프임

<br/>
<br/>

# 🐣 트리 사용 <span id="2">
## 실생활 사용되는 예시
- [1] 가장 흔한 예시로는 HTML과 문서객체모델이라는 DOM
- HTML의 요소인 문자들 사이의 관계는 부모-자식 관계
- [2] 네트워크 라우팅 (최단 경로 찾음)
- [3] 추상 구문 트리 (프로그래밍 언어의 구문을 보여주는 방법 중 하나)
- 코드를 실행하거나 코드를 가져와서 끼워 넣거나 해서 유효한 문법을 만들고 싶다면 추상 구문 트리 사용
- [4] 인공 지능 향상 (간단 예시 : 최소 최대 트리)
- 예를 들어 틱택토 게임의 경우 인공지능이 무작위로 행동하는 것이 아닌 게임을 잘하려고 하면, 
- 게임의 논리 구조를 트리로 나눠서 현재 게임판의 상황과 상대방이 취할 수 있는 모든 가능한 경우의 수라는 식으로 만들 수 있음
- 여러 가지 선택지가 있지만 기본적으로 이 트리 구조는 일어날 수 있는 모든 경우의 수를 다루게 되고, 상대방이 두는 수에 따라서 가장 최선의 다음 수를 둠. 최소최대 알고리즘의 논리 구조와 그걸 코딩하는 방법에는 손도 못대는 수준이지만 결정 트리임.
- [5] 운영 체제 폴더 설계 방식
- [6] JSON - AJAX 호출하여 API 데이터

<br/>
<br/>

# 🐣 이진 트리  <span id="3">
## 트리의 종류
- 트리 Trees
- 이진 트리 Binary Trees
- 이진 탐색 트리 Binary Search Trees
- 즉,
- 이진 탐색 트리는 특정한 형태의 이진 트리이고
- 이진 트리는 다시 특정한 형태의 트리
- 이진 탐색 트리는 정렬된 데이터를 특정한 방식으로 저장

## 이진 트리 Binary Trees
- 트리의 종류
- 각 노드가 최대 두 개의 자식을 가져야 함
- 자식이 0개, 1개, 2개일 수 있음
- 이진 트리는 순회가 쉽다는 장점이 있음(삼진 트리 비교하자면)

## 이진 탐색 트리 Binary Search Trees
- 이진 트리의 특별한 종류이자 트리의 종류
- 최대 노드당 두 개의 자식 가짐
- 자식이 0,1,2개
- 특별한 방식으로 정렬되어 있음. 데이터가 순서에 따라 저장.
- BST는 데이터를 비교해서 정렬 가능하게 저장(일반적으로 숫자, 데이터 상관 없음)
- 비교하고 순서를 매기는 방법으로 어떤 것이 더 크고 작은지 비교하는것이 BST 작동하는 방식
- 예를들어 어떤 노드를 볼 때 해당 노드보다 작은 모든 숫자나 요소는 이 왼쪽에 위치하게 되어 있음
- 정리하자면, 모든 부모 노드는 최대 2개의 자식을 가지고, 부모 노드의 왼쪽에 있는 모든 노드는 언제나 부모보다 작고, 부모 노드보다 오른쪽에 있는 모든 노드는 언제나 부모보다 큼

<br/>
<br/>

# 🐣 트리 클래스  <span id="4">
- BST_Classes.js
```
class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
}
```

- 이진 탐색 트리 자체는 딱 하나 중요한 프로퍼티를 지님. root 
- 그리고 각 노드는 값을 가짐
- Node class에는 연결 리스트의 next prev 대신에 left와 right가 있음
- 위의 코드에서 아래와 같이 넣어보면

```
var tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);
```

- tree 변수에 이진탐색트리 생성
- 트리에 new Node 10 생성
- right에는 15값, left에는 7 값의 new Node 생성
- 7보다 크기 때문에 left.right로 new Node 생성

<br/>
<br/>

# 🐣 이진 검색 트리 : insert  <span id="5">
## 트리에 무언가를 삽입 insert
- 값을 입력하면 트리가 적당한 자리에 그 값을 추가
- 첫번째 줄부터 노드를 만들 필요는 없지만, 새로운 노드를 만들고
- 루트가 있는지 확인 후, 루트로 감
- 루트가 없으면 트리가 비어있어서 처음으로 노드 만든 것이 루트가 됨
- 루트가 존재한다면, 새로운 노드의 값이 투르의 값보다 큰지 작은지를 확인
- 그 결과에 따라서 더 크다면 노드에 오른쪽 값이 있나 확인
- 오른쪽 값이 있다면 그 노드로 옮겨가서 단계를 반복
- while 루프 형태, 순환형으로 반복적 동작할 수 있도록 하여 더 크면 다음 것 .right로 
- 마지막에는 전체 트리 출력
<br/>

## 코드로 구현해보기 insert
- BST_Insert.js
```
class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }
}


//      10
//   5     13
// 2  7  11  16

var tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)
```

- insert method에는 value 인자로 받고
- new Node 생성(생성할 때 인자 받음)
- 만약 root가 null 값이면 newNode 를 root로 하고 이진탐색트리 반환(BST 생성한 인스턴스)
- current에는 root를 넣고
- while 반복문 돌리는데 true일 때 계속해서 돌림
- 만약 value가 current.value와 같다면 undefined 반환(value가 current.value와 같은지를 확인하는 코드를 하나 추가하여 계속되는 무한루프를 방지)**
- current.value보다 작으면 left로 가게 하는데
- if 문 추가하여 current.left가 null 값이라면 newNode하고 this 반환
- current.left가 값이 있다면 current에 current.left를 넣어줌(계속 반복위해서)
- right도 동일 메커니즘

<br/>
<br/>

# 🐣 이진 검색 트리 : find  <span id="6">
## 설명
- 이진 트리를 가지고 해당 값이 트리에 있는지를 탐색
- 예를들어 50이 트리에 있는지나 100이 트리에 있는지 등을 확인
- insert와 비슷하게 가능

<br/>

## 코드로 구현해보기 find
- BST_Find.js
```
class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }
    find(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }
    contains(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
}


//      10
//   5     13
// 2  7  11  16

var tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)
```

- [값, 노드를 출력하는 find]
- find 인자로 value 받음. 찾을 값
- root가 null 값이면 false 출력
- current에는 root 값 넣고, found에는 false를 넣음
- while 반복문 조건은 current && !found 즉, current가 존재하고 found가 false 일 때 
- value가 current.value 보다 작으면 current에는 current.left 값을 부여하고, 반대에는 righr값 부여
- 만약 둘다 아니라면(value랑 current.value랑 동일) found는 true 처리
- 그리고 !found 즉 false 일 때 undefined 반환하도록 설정하고
- return 값은 current로
- return 값 undefined 혹은 해당 node 의 value

<br/>

- [참과 거짓을 출력하는 contains]
- 위와 동일하지만 true, false를 출력함

<br/>
<br/>

# 🐣 이진 검색 트리 : Big O  <span id="7">

- Insertion : O(log n)
- Searching : O(log n)

<br/>

## 설명

- 밑이 2인 로그인데, 생략
- (Big O 비교위한 사진 참고)
- 아래 트리에서는 위에 비해서 노드의 숫자가 두 배로 늘기는 했지만 한 번만 더 하면 됨
- 즉 트리가 두 배가 되어서 노드의 개수가 두 배가 될 때 단계의 수는 하나가 늘어남
- Big O 그래프를 살펴봤으 때 log n보다 좋은 것은 O(1) 상수 값 밖에는 없음
- log n인 것이 장점이 되는 것임
- 근데 예외의 경우로 안 좋은 경우, 트리가 한쪽으로 길게 늘어지는 상황은 연결 리스트랑 비슷해 보일 수 있고, 삽입이나 탐색을 할 때 취해야 하는 단계의 숫자도 노드의 숫자 증가에 따라서 커지면서 완전히 한 쪽으로 쏠린 트리에 대해서는 빅오(n)의 값을 가짐
- 이럴 땐 다른 루트를 선택해서 이진 탐색 트리를 다시 작성하는 것이 나음