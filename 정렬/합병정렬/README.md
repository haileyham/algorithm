# <a href="#1">🐣 합병 정렬</a> <br/>
# <a href="#2">🐣 합병 구현</a> <br/>
# <a href="#3">🐣 합병 정렬 구현</a> <br/>
# <a href="#4">🐣 합병 정렬 : 빅오 복잡도</a> <br/>
mergeArrays.js
mergeSort.js

<br/>
<br/>

# 🐣 합병 정렬<span id="1">
[합병정렬자료](https://cs.slides.com/colt_steele/intermediate-sorting-algorithms)
[sorting](https://visualgo.net/en/sorting?slide=1)
[빅오](https://www.bigocheatsheet.com/)

## 설명
- 기존의 버블,선택,삽입 정렬의 경우 작은 규모에서만 사용. 큰 규모일 경우 시간 오래 걸림 O(n^2)
- 합병 정렬의 경우 O(n long n)으로 향상 가능
- 합병 정렬은 합병 + 정렬 조합 (분할, 정렬, 합병 모두 일어남)
- 0개 요소, 1개 요소 배열이 이미 정렬되어 있다는 점을 활용(예로 만약 숫자 1로만 구성된 배열을 정렬해야 할 경우, 정렬되어 있다는 것을 알고 있음을 활용)
- 배열을 더 작은 배열로 나누는 방식
- 분할 정복 알고리즘 (분할하고 정복)
- 0이나 1 요소 배열이 될 때까지 계속
<img src="https://raw.githubusercontent.com/haileyham/algorithm/3255742b03c4264d19f1c964fdc491692a781116/%EC%A0%95%EB%A0%AC/%ED%95%A9%EB%B3%91%EC%A0%95%EB%A0%AC/%ED%95%A9%EB%B3%91%EC%A0%95%EB%A0%AC.png">
- [8, 3, 5, 4, 7, 6, 1, 2] 요소 8개
- 반으로 분할하여 코드 시작
- 정렬된 배열, 0개나 1개 요소가 있는 배열이 될 때까지 분할하는 것
- 가장 작은 배열을 만들고서 정렬된 배열을 합칠 때 정렬 반복

## 과정 설명 이전
- 정렬된 두 배열 합병을 담당할 함수를 먼저 구현
- 입력 배열 두 개에 있는 모든 요소를 포함하는 것이 중요
- O(n+m) 시간과 O(n+m) 공간으로 실행
- n과 m은 함수 첫 번째 배열과, 두 번째 배열 크기
- n이 아주 커지지만 m은 아주 커지지 않는다면 그냥 O(n+m)
- O(n)이었다면 선형 시간을 사용한다는 거니까 반복하면서 각 항목을 한 번씩 방문
- 하지만 O(n+m)이므로 각 배열의 각 항목에 대해 한 번씩 반복하는 것

## 정렬된 두 배열 합병 과정
- 빈 배열 만듦
- 입력 두 개 취하는 함수 정의, 마지막 반환할 빈 배열 만듦
- 각 입력 배열에서 가장 작은 값부터 시작
- 카운터는 i, j 두 개, 0부터 시작
- while 루프 사용
- 아직 살펴보지 않은 값이 있다면, 즉 i와 j가 각각의 배열 끝에 도달하지 않았다면, 첫 번째 배열의 값으로 첫 번째 항목을 취한 다음 두 번째 배열의 첫 번째 항목 값과 비교
- 첫 번째 항목이 더 작다면 결과 배열에 집어넣은 다음 첫 번째 배열의 다음 항목으로 넘어감
- 반대로 첫 번째 배열에 있는 항목이 더 크다면 두 번째 배열의 값을 취하여 결과로 넣은 다음 두 번째 배열의 다음 값으로 넘어감
- 배열 하나를 완료한 다음에는 다른 배열의 남은 값을 모두 넣음

```
merge([1,10,50], [2,14,99,100])

// [1,10,50]과 [2,14,99,100]
// [] 작은 것부터 넣음
```

- 두 배열을 두고 시작
- [1,10,50]과 [2,14,99,100]을 뒀을 때 i, j는 각각 0부터 시작 (1,2를 말함)
- 1과 2를 비교하여 더 작은 것을 새 배열에 둠 [1]
- 그 다음 i는 1로 넘어가고 j는 2
- 10과 2를 비교 했을 때 2가 더 작기 때문에 새 배열에 2 넣어줌 [1,2]
- 계속해서 반복하여 [1,2,10,14,50,99,100]


<br/>
<br/>

# 🐣  배열 합병 구현 <span id="2">
## 배열 합병 정렬의 합병 구현
mergeArrays.js
```
// Merges two already sorted arrays
function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j])
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i])
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j])
    j++;
  }
  return results;
}
merge([100, 200], [1, 2, 3, 5, 6])
```

- 위에서 아래 코드의 경우 arr2 배열이 더 길고 i,j 각 비교가 끝남
- 이럴 때 j의 경우 arr2.lenght 보다 작기 때문에 
- arr2 배열 그대로 넣어주기

```
  while (j < arr2.length) {
    results.push(arr2[j])
    j++;
  }
```

<br/>
<br/>

# 🐣  합병 정렬 구현 <span id="3">
## 합병정렬의 정렬 구현
- 합병 정렬 목표는 배열을 계속해서 반으로 나누는 것
- 배열을 나눌때 slice 사용 0에서 중간 배열로, 중간에서 0으로
- 재귀하여 계속 호출
- 기본 케이스는 끝에 도달하여 배열 길이가 1보다 작거나 같아야 함
- 작은 배열 준비되면 작성해 놓은 합병 함수 사용해 다시 합침 > 전체 배열 길이 돌아갈 때 까지

mergeSort.js
```
// Merge function from earlier
function merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}

// Recrusive Merge Sort
function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

mergeSort([10,24,76,73])

```

<br/>
<br/>

# 🐣  배열 합병 : 빅오 복잡도 <span id="4">
(img 합병정렬 빅오)
- 공간 복잡도만 O(n)

[시간복잡도]
- 시간복잡도 O(n log n)
- log n : 8개 요소가 있으면 2를 3번 곱해서 8 (3번 나눔)
- 32개 요소 2*2*2*2*2 
- n : 각 분할마다, 합병할 때 O(n)번 비교

[공간복잡도]
- 배열이 클수록 합병 정렬에서는 메모리에 더 많은 배열 저장 필요
- 보통은 시간 복잡도를 신경 쓰지만, 공간복잡도를 고려할 때는 버블 정렬등과 비교했을때 합병 정렬이 더 많은 공간 차지함
