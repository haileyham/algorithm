# <a href="#1">🐣 선택 정렬</a> <br/>
# <a href="#2">🐣 선택 정렬 구현</a> <br/>
# <a href="#3">🐣 선택 정렬 빅오</a> <br/>

<br/>
<br/>

# 🐣  선택 정렬 <span id="1">

## 설명
- 버블 정렬과 비슷하지만, 큰 값을 배열 끝에 위치시키는 대신
- 작은 값을 한 번에 하나씩 위치에 배열
- 처음부터 끝까지 움직이지만, 실제 정렬된 데이터는 처음부터 누적
- 최솟값을 찾아 마지막에 바꾸어 맨 앞에 둠.
- (예시) [5,3,4,1,2]가 있을 경우 5,3 비교 최솟값 찾고 / 3,4비교 최솟값 찾고.. 반복
- 첫 번째의 경우 [1,3,4,5,2]로 정렬 됨.
- 두 번째의 경우 [1,2,3,4,5]로 정렬 끝
- (예시) [44,5,38,19,47,15]의 경우 첫 번째 때, 5가 최솟값이라 44와 5 변경[5,44,38,19,47,15]
- [5,44,38,19,47,15] 두번째때 5는 이미 정렬됐기 때문에 44부터 시작. 새로운 최솟값은 15라서 44와 15 변경 [5,15,44,38,19,47]
- 위와 같은 방식으로 계속해서 정렬
- 진행하면서 가장 작은 요소, 즉 최솟값을 선택하고 맨 앞으로 배치

## 코드를 어떻게?
- 처음 해야할 것은 최솟 값을 저장할 변수 만들기
- 처음에는 최솟값 저장 변수 첫 번째 항목과 같게 설정(유일하게 확인된 값이기 때문)
- 다음에는 진행하면서 다음 항목과 비교하여 최솟값으로 갱신
- 실제로 변수에 저장하는 것은 값이 아닌 값을 찾은 인덱스
- (3번 인덱스가 최솟값일 경우) 첫 번째로 훑어본 다음 0번 인덱스를 3번 인덱스와 변경
- 계속해서 변경

<br/>
<br/>

# 🐣  선택 정렬 구현<span id="2">
selection_sort.js
```
// LEGACY VERSION (non ES2015 syntax)
function sselectionSort(arr){
    for(var i = 0; i < arr.length; i++){
        var lowest = i;
        for(var j = i+1; j < arr.length; j++){
            if(arr[j] < arr[lowest]){
                lowest = j;
            }
        }
        if(i !== lowest){
            //SWAP!
            var temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr;
}

// ES2015 VERSION
function selectionSort(arr) {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }

  return arr;
}

selectionSort([0,2,34,22,10,19,17]);
```

- for 반복문 안에 최솟값 담을 변수 만듦
- for 반복분 j는 i+1 (비교해야하기 때문)
- j와 최소값 비교하여 j가 더 작을 경우 최솟값 업데이트
- 참고로 최솟값은 value가 아니라 index
- 최솟값과 i 위치를 바꿔주기 위해 temp 이용
- if 변수에 i !== lowest 로 무의미한 반복 피하기(예를들면 첫번째 마주한 값이 lowest일 경우 반복 x도록)
- ES2015 ver에서는 swap 만들어서 temp 없이 바로 대입하도록

<br/>
<br/>

# 🐣  선택 정렬 : 빅오 복잡도<span id="3">

- 효율적이지는 않음 O(n^2)
- 선택 정렬이 버블 정렬보다 나은 시나리오는 단 하나, 스왑수를 최소화 하는 경우
- 버블 정렬의 경우 가장 큰값을 끝에 도달할 때까지 계속 바꾸면서 반복하여 비교 많이 하지만, 각 루프 끝날 때 한 번만 바꿈
- 어떤 이유로 메모리 고려, 실제 스왑 수행 고려할 경우 선택 정렬이 나을 수도 있음.
