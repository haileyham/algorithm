<a href="#1">🐣 Question</a> <br/>
<a href="#2">🐣 빈도수 세기- validAnagram</a>

<br/>
<br/>

# 🐣 Question <span id="1">
2개의 배열을 허용하는 same이라는 함수를 작성. 
배열의 모든 값이 두 번째 배열에 해당하는 값을 가지면 참을 반환.
따라서 첫 번째 배열에는 여러 값, 두 번째 배열의 값이 정확히 동일하지만 제곱되어 있음.
순서는 상관 없고, 제곱만 되어 있으면 됨. 값의 빈도도 동일해야 함.

## 🐣 example
입력 값
```
1,2,3
```
반환 값
```
4,1,9 // true
1,9,9 // false
``` 

## 🐣 solution 1
- O(o^2)

### 설명

중첩된 루프 사용. 하나의 루프 작성하지만 그 자체가 루프인 인덱스 사용.
1. 두 배열의 길이가 다른지 여부 확인
2. 각 값의 제곱을 전달하는 위치에 indexOf를 호출(해당 배열에 루프 적용)
    [indexOf ](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
3. arr2에서 arr1의 각 값에 해당하는 인덱스를 물음
(ex [1,2,3], [9,1,4] 일경우, arr2에서 arr1의 값 1의 제곱이 어느 인덱스인지)
4. -1 값일 경우 false; 처리. 나머지 corrrectIndex 저장
5. splice 사용하여 true값들인 correctIndex 배열에서 제거 
    [splice](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

아래 흐름대로 감
```
[9,1,4,4]
[9,4,4]
[9,4]
[4]
true
```
</br>

### 특징

- O(o^2) : 배열 길이 1000이면 100만번반복
- 제곱 시간 사용. 순진한 접근법
- indexOf 기능 전체 배열 반복, 중첩된 루프인 전체 배열 잠재적 반복
- 따라서 n이 배열의 길이를 늘리면 이 값이 함께 증가하여 2차 관계로 중첩

</br>


## 🐣 solution 2
- O(n)

### 설명
1. 배열 길이 비교
2. for of 로 각 배열 돌려줌
3. frequencyCounter1 혹은 2 객체에 각 배열(arr1,arr2) 값들이 있으면 넣어주고 아니면 +1
```
{1: 1, 2: 2, 3: 1, 5: 1}
{9: 1, 1: 1, 4: 2, 11: 1}
```
4. for in 로 frequencyCounter1 객체 돌려주면서 값들 있는지 확인 
frequencyCounter2랑 key값 다르면 false(ex: arr1의 key 2를 2배한 4가 arr2 key에 있는지 확인) 
5. 두번째 if문에서 key 빈도수 확인(key의 value 비교)


### 특징
- O(n) (여기서는 3n정도 O(n))
- 첫 번째 배열에 루프를 적용하여 두 번째 배열의 하위 루프에서 각 값을 확인하는 대신 각 배열에 한 번씩 개별적으로 루프를 적용
- 두 개의 루프가 두 개의 중첩된 개별 루프보다 훨씬 나음
- 각 배열에 한 번씩 개별적으로 루프를 적용

```
{1:1, 2:2, 3:1}
{1:1, 4:2, 9:1}
true
```
```
{1:1, 2:2, 3:1,5:1}
{1:1, 4:2, 9:1, 11:1}
false
```

<br/>

# 🐣 빈도수 세기 - validAnagram <span id="2">

## 문제
두 개의 문자열이 주어졌을 때, 두 번째 문자열이 첫 번째 문자열의 애너그램인지 확인하는 함수를 작성합니다. 애너그램은 다른 글자의 글자를 재배열하여 형성된 단어, 구 또는 이름입니다. (예시: cinema -> iceman)

예시:
```
validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false // false
validAnagram('awesome', 'awesom') // false
validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true
```
안내: 문자열에 소문자만 포함되어 있다고 가정해도 됩니다.
Time Complexity - O(n)

## 설명
