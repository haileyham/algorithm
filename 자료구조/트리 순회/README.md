<a href="#1">🐣 트리 순회</a> <br/>
<a href="#2">🐣 너비 우선 탐색 BFS</a> <br/>
<a href="#3">🐣 너비 우선 탐색 BFS : 해결법</a> <br/>
<a href="#4">🐣 깊이 우선 탐색 DFS : 전위</a> <br/>
<a href="#5">🐣 깊이 우선 탐색 DFS : 후위 </a> <br/>
<a href="#6">🐣 깊이 우선 탐색 DFS : 중위</a> <br/>
<a href="#7">🐣 너비 우선 탐색과 깊이 우선 탐색</a> <br/>
- [트리 순회 slide](https://cs.slides.com/d/SAf3EIc/live#/40)
- [Binary Search Tree, AVL Tree - Visualgo](https://visualgo.net/en/list?slide=1)
- Breadth_First_Tree.js
- Depth_First_Tree.js
- Depth_First_Tree.js
- Depth_First_Tree.js

<br/>
<br/>

# 🐣 트리 순회 <span id="1">
## 어떻게 하면 모든 노드를 한 번씩 돌 수 있을까
- 트리 순회 방식 2개 : 너비 우선, 깊이 우선
<br/>
- [너비 우선 탐색 BFS] : Breadth First Search 
- 맨 처음에서 시작을 해서 기본적으로 트리를 가로질러서 작업
- 10을 보고, 6, 15, 그리고 나서 다음으로 가는 거죠, 그러니까 너비는 트리의 너비를 의미
<br/>
- [깊이 우선 탐색 DFS] : Depth First Search 
- 세 가지 순서 존재 : 전위, 후위, 중위
- 전위(PreOrder)
- 후위(PostOrder)
- 중위(InOrder)

<br/>
<br/>

# 🐣 너비 우선 탐색 BFS <span id="2">
- 같은 레벨의 모든 노드를 거쳐야 함(수평)
- 큐 queue(선입선출)를 사용하여 만들 수 있음(도와주는 역할)
- 배열이나 리스트를 사용하면 push로 요소를 추가하고 shift로 제거를 해서 가장 먼저 들어온 것이 가장 먼저 나가도록 해주면 됨
- 루트를 가지고 그걸 큐에 넣음, 그리고 큐에 무언가가 있다면 계속 루프를 돌림
- 그리고 큐에서 dequeue를 합니다, 배열을 사용하는 경우라면 shift를 사용해서 배열의 맨 앞에서 제거
- 그 노드를 가지고 마지막에 출력을 하는 값, 아니 리스트에 추가하고, 그리고 그 노드에 왼쪽 값이 있는지 확인해서 있다면 큐에 넣어주고, 오른쪽을 확인해서 값이 있다면 큐에 넣어줌
- 그리고 가장 마지막에 루프가 끝난 다음에 모든 값을 저장한 변수를 출력

```
//     10
//   6    15
// 3  8      20
queue : [6,15] // 6,15 큐에 넣고 루프 돈 후에
visited: [10] // visited에 넣어줄 예정
```

- 처음 10을 큐에 추가하고(할 일 목록이라 생각)
- 큐에 있는 것을 꺼내서 visited에 넣어주고
- 왼쪽, 오른쪽에 값이 있는지 확인 후, 각 6,15 큐에 넣어줌
- 루프 다시 돌고, 큐에 가장 먼저 온 것을 제거해서 visited에 넣어줌
- 왼쪽, 오른쪽 값 확인 반복하고 3,8,20의 경우 각 오른쪽 왼쪽 없기 때문에 이후에는 큐에 아무것도 추가 하지 않음
- 큐는 비어있기에 종료되고, 마지막에는 visited 값을 출력
- 너비 우선 탐색 [10,6,15,3,8,20]
- 큐를 사용해서 저장(할 일 목록이라 생각)

<br/>
<br/>

# 🐣 너비 우선 탐색 : 해결법  <span id="3">
- Breadth_First_Tree.js
```
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
//(생략 이진 검색 트리 insert, find, contains)
  BFS() {
    var node = this.root,
      data = [],
      queue = [];
    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
}

var tree = new BinarySearchTree();
tree.BFS();
```

- 변수 node에다가 루트를 넣어두고
- data와 queue 빈 배열을 만든 다음
- queue에 node를 push해줌. 즉 루트 넣어줌
- 그리고 while 반복문 queue.length 큐의 배열이 빈값이 될 때까지 돌려줌
- node에는 queue를 shift 해서 넣어주고
- data에는 node.value를 push 해줌
- node의 left, right 각각 조건문 거는데,
- 각 노드의 left, right가 있을 경우 queue에 push 해당 노드를 push 해줌
- 마지막으로는 data 출력 즉, queue에서 계속해서 순서대로 옮겼던 data 출력


<br/>
<br/>

# 🐣 깊이 우선 탐색 : 전위 PreOrder <span id="4">
- 노드에 먼저 접근한 다음에
- 왼쪽 전체를 보는 것
- 즉 왼쪽을 순회한 다음에 오른쪽을 순회
- 아래와 같을 경우 10에서 시작해서 왼쪽인 6, 6의 왼쪽인 3, 그다음 오른쪽인8을 보고 난 다음
- 10의 오른쪽을 살펴보게 됨 15,20
- 순서는 [10,6,3,8,15,20]

```
//     10
//   6    15
// 3  8      20
```

- 재귀를 사용
- 출력은 변수 출력 data 혹은 visited
- current 변수에는 트리 루트를 저장하여 시작
- preOrder 함수는 인수를 입력하지 않고, 두번째함수에 노드의 값을 변수에 넣어서 저장(헬퍼함수 traverse)


<br/>

## DFS : PreOrder 코드로 살펴보기

- Depth_First_Tree.js
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
    //(생략 [이진검색트리]insert, find, contains, [트리순회]BFS)
    DFSPreOrder(){
        var data = [];
        function traverse(node){
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.DFSPreOrder();
```

- DFSPreOrder 함수 작성
- data 변수에 빈 배열 넣음 > 맨 마지막에 출력할 변수
- traverse라는 helper 함수를 만드는데, node를 인자로 받음
- data에 node.value를 push하고, 조건문 node.left,right가 있으면 traverse에 각각의 노드를 넣도록 재귀적 호출
- traverse에는 root node를 넣어주고 재귀로 돌림
- return 은 data
<br/>

- traverse(this.root)에 대해서 조금 더 설명을 하자면,
- root를 넣으면서 시작을 해줌
- 처음에 받은 node 값 즉 root 를 data에 push
- 그리고 node.left, right 여부를 체크하고 있을 경우 각각 traverse 재귀적 호출
- left 예로 들어서 노드가 있을 경우, traverse에 node.left를 매개변수로 줌
- 재귀적으로 호출된 traverse는 해당 node.left를 data에 push함
- 이후 또 left 혹은 right 여부를 찾음
- 또 left가 있을 경우 또 호출함
- 만약 left가 더 이상 없을 경우 right 호출
- 해서 전위로 뿅뿅

### 과정 쉽게 설명

```
//     10
//   6    15
// 3  8      20
```

- 위와 같다고 했을때
- 처음에 root 10 값을 traverse에 넣어주고 이를 data에 push 해줌
- 다음에 10의 left 값 6이 있으니 traverse(6) 호출하고, 6 data.push해주고, 6에서 또 left가 있으니 traverse(3) 호출
- 3 값을 data.push 해주고, 이제 left,right가 없으니 나옴
- 반면에 6에서 right 값 8이 있었으니, traverse(8) 호출하고, data.push 8 해주고, 이제 left,right 없으니 나옴
- 쭊쭉나와서 10에서 left는 끝났고, right를 동일한 방식으로 살펴보면 됨

<br/>
<br/>

# 🐣 깊이 우선 탐색 : 후위  <span id="5">

## DFS : PostOrder 코드로 살펴보기

- Depth_First_Tree.js
```
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
    //(생략 [이진검색트리]insert, find, contains, [트리순회]BFS,DFS(PreOrder))
  DFSInOrder() {
    var data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.DFSPreOrder();
tree.DFSPostOrder();
```

## 쉽게 살펴보기
- 앞서 살펴본 PreOrder와 과정이 비슷함
- 나중에 출력할 빈배열 data 변수 만들고
- traverse 재귀함수 만듦
- left, right 각각 조건문 만들고 traverse 재귀 호출 함
- 다른 점은 node를 data.push 하는 시점이 다른데,
- preOrder 즉 전위순회의 경우 if 조건문 이전에 push를 했음 (즉 10을 보고 있으면 10을 먼저 넣음)
- 반대로 postOrder 즉 후위 순위의 경우 if 을 통한 재귀 호출이 끝나고 data.push를 함
- 다음과 같은 경우 10을 먼저 넣는게 아니라
- 10에서 왼쪽 오른쪽 확인하고 재귀호출하고
- 또 6에서 왼쪽 오른쪽 확인하고 재귀 호출 하고
- 또 3에서 왼쪽 오른쪽 확인하고, 없으면 그제서야 data push해줌
- 그래서 과정이 [3,8,6,20,15,10] 임

```
//     10
//   6    15
// 3  8      20
```

<br/>
<br/>

# 🐣 깊이 우선 탐색 : 중위  <span id="6">

## DFS : InOrder 코드로 살펴보기

- Depth_First_Tree.js
```
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
    //(생략 [이진검색트리]insert, find, contains, [트리순회]BFS,DFS(PreOrder,PostOrder))
  DFSInOrder() {
    var data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.DFSPreOrder();
tree.DFSPostOrder();
tree.DFSInOrder();
```

## 쉽게 살펴보기
- InOrder 중위의 경우 data.push를 if문 left,right 중간에 함
- 즉 아래의 예시로 살펴보면
- 10 노드에서 왼쪽을 먼저 살펴보고, 6이 있었으니 또 왼쪽을 살펴봄
- 3이 있으니 3에서 또 왼쪽 살펴보는데 없어서 3을 push 해줌
- 그 다음 오른쪽을 살펴보니 없어서 나오고
- 6의 왼쪽을 살펴봤으니 6을 push 해주고
- 이제 6의 오른쪽을 살펴서 8이 나옴. 왼쪽 살펴보고 없어서 8 push 하고 오른쪽 살펴보고 없어서 나옴
- 이제 10의 왼쪽은 모두 살펴봤음. 그렇기에 10을 push 해주고 이제는 10의 오른쪽을 살펴봐주고 과정 반복
- 결과적으로 [3,8,6,10,20,15]

```
//     10
//   6    15
// 3  8      20
```

<br/>
<br/>

# 🐣 너비 우선 탐색과 깊이 우선 탐색  <span id="7">
## 언제 사용하는가?
- 사실 위의 내용들을 배우고서 가장 먼저 든 의문임. 어디에 사용할까?
- 우선 너비우선탐색 BFS와 깊이우선탐색 DFS를 비교해보자

## BFS
- 완전히 펼쳐져서 넓게 펴진 상태로 아래까지 뻗어 나가는 트리를 작업할 때 너비 우선 탐색을 사용한다면, 일단 모든 노드를 저장하기 위해 큐를 사용한다는 걸 기억
- BFS 즉 너비우선탐색이 깊이우선탐색에 비해 더 적은 공간을 사용
- 한 개의 층이 호출 스택이 되는 것

## DFS
- 만약에 트리가 아주 넓다면 너비 우선은 큐를 저장하는데 더 많은 공간을 사용하고, 아주 깊고 긴 트리라면 깊이 우선이 더 많은 공간을 사용

### 전위 PreOrder
- +AB(A와 B 추가)
- 트리를 복사하거나 평탄화 해서 저장하는 경우, 파일이나 데이터 베이스 같은 곳에 저장을 했다가 나중에 연쇄 구조로 다시 만들어 낼 때 도움
- 기본적으로 냉동 건조를 해서 보관했다가 나중에 다시 수분을 공급할 준비
- 중첩된 함수를 간단하게 표현하기 때문에 Lisp 및 기타 함수형 프로그래밍 언어에서 일반적

### 후위 PostOrder
- 'AB+'(A와 B 추가)
- 작업 순서를 표시하기 위해 괄호를 사용할 필요가 없기 때문에 스택 기반 및 일부 계산기 알고리즘에 사용.

### 중위 InOrder
- A+B(A와 B의 추가)
- 트리에 있는 모든 노드들을 오름차순으로 구하게 됨(가장 작은 것부터 큰 것까지)
- 아주 큰 이진 탐색 트리를 작업한다고 하면 부모 노드보다 큰 모든 것은 오른쪽에, 작은 것은 왼쪽에 있다는 말
- 거기에 정위로 깊이 우선 순회를 하면 모든 노드가 순서대로 나오게 됨
- 예를 들어서 리스트를 받아서 데이터베이스에 넣어야 할 경우 사용