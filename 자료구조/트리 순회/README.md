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

# 🐣 깊이 우선 탐색 : 전위  <span id="4">
- Depth_First_Tree.js

<br/>
<br/>

# 🐣 깊이 우선 탐색 : 후위  <span id="5">
- Depth_First_Tree.js

<br/>
<br/>

# 🐣 깊이 우선 탐색 : 중위  <span id="6">
- Depth_First_Tree.js

<br/>
<br/>

# 🐣 너비 우선 탐색과 깊이 우선 탐색  <span id="7">