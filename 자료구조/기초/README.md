# <a href="#1">🐣 자료 구조 소개 </a> <br/>
# <a href="#2">🐣 ES 2015 class 구문 개요 및 class 키워드</a> <br/>
# <a href="#3">🐣 자료 구조 : instance 메소드 추가</a> <br/>
# <a href="#4">🐣 자료 구조 : class 메소드 추가</a> <br/>
[자료구조 Data Structure Slide](https://cs.slides.com/colt_steele/es2015-class-syntax)
[class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
class_keyword.js
instance_methods.js
student_class.js
point_class.js

<br/>
<br/>

# 🐣   자료 구조 소개 <span id="1">
## 자료 구조가 하는 일?
- 어떤 공통적인 것들이 자료 구조임을 나타낼까?
- 공통적 특징은 value 값들의 모음이라는 것
- 자료 구조들은 해당 데이터에 적용되는 값들 및 기능 혹은 작업들 사이의 관계를 포함
- array 배열을 생각할 경우 array에는 수 많은 값들을 가지고 있음
- array 순서, 값들 추가 이동 (push, pop) 등 모든 종류의 내장 메소드와 기능들을 제공
- 따라서 처음 다루려는 단방향 연결 리스트를 정의함에 있어 어레이 구조와 정확하게 동일한 틀에 맞도록 우리만의 구조를 정의하게 될 것
- 데이터를 저장할 뿐 아니라 당연히 각각의 데이터들 간의 관계를 설정하는 특정한 방식에 의해 데이터를 삽입하기도 할 것
- 임의로 데이터 저장 방식이 결정되지는 않음. 특정한 패턴 혹은 관계가 존재
- 자료 구조들은 데이터의 모음을 저장하게 되고 우리는 많은 메소드들을 작성하게 됨

## 왜 많은 자료 구조들이 존재할까?
- 이유는 특정 유형의 문제에 있어서 특정한 자료 구조가 효율적이라는 사실에 기인
- 따라서 일부 자료 구조는 매우 특화되어 있는 반면 어레이 혹은 자바 스크립트 객체와 같이 자주 사용되고 있는 일부 자료 구조들은 매우 일반적임(그런 일반적인 자료 구조들의 경우 우리가 직접 구현할 필요는 없음)
- RB (Red and Black) 트리, 비방향 그래프, 혹은 그와 유사한 자료 구조로 작업해야 할 경우에 이들 자료 구조가 보통 무료로 제공되지는 않기 때문에 프로그래밍 언어로 직접 구현 필요
- 자료 구조들은 모두 다른 일들 함
- 동작 방식, 데이터와 기능들 사이의 관계, 사용되는 메소드들 등은 매우 다름

## 자료 구조 알아야 하는 이유?
- array 만을 사용하기에는 한계가 존재할 수 있음
- 다른 관계를 표현할 무엇인가를 필요하게 됨
- 더 이상 선형적이지 않고 더 복잡한 데이터를 다루게 될 수 있으며, 데이터를 저장하기 위한 다른 방법이 필요할 수 있음
- 많은 경우에 있어 이러한 상황에 직면하게 될 것이며, 예를들어 데이터베이스와 같이, 그래프 혹은 그래프 형식을 반환하는 API 혹은 라이브러리를 사용해 작업해야 될 수 있음
- 자바 스크립트에서 DOM을 사용해 본 경험이 있다면 이미 트리를 조작하거나 상호 작용해 오고 있다는 것

## 더 뛰어난 자료구조?
- 더 뛰어난 자료구조는 없고 각각의 상황에 맞는 자료구조 존재
- 예를들어 지금 구글맵과 같은 방대한 작업을 필요로 하는 GPS 어플리케이션을 작성 중일 경우
- 좀 더 간단한 예로 여러분이 지금 가까운 주요소나 혹은 가장 저렴한 거래 장소 등을 찾아줄 수 있는 코드를 작성하고 있다 가정
- 그래프를 사용하기 원할 수 있는데, 이 경우 당연히 그래프가 타당한 자료 구조임.
- GPS 데이터와 위치 데이터를 표현할 수 있는 그래프를 이용해 특정 지점들과 그래프 사이의 최단 경로를 찾는 것에 대한 것에 관한 것
- 단일 어레이로 지도를 표현하는 것은 매우 어려운 작업

<br/>

- 만일 어레이지만 앞단으로 신속하게 삽입할 수 있고 끝단에서 쉽게 제거할 수 있는 정렬된 리스트를 필요로한다면?
- 시작점에 삽입하거나 시작점으로부터 제거함에 있어 어레이 구조는 매우 적절하지 않음.
- 그러기 위해서는 모든 것들에 대한 인덱스를 유지해야 하죠. 방대한 데이터 세트를 정렬해야 할 수도 있음
- 수 백만에 달하는 데이터 지점들이 있고 삽입이나 제거는 양 끝단에서만 발생할 수 있다고 가정했을 때, array 사용은 비효율적
- 이럴 때는 연결 리스트 유용하게 사용

<br/>

- 항공사나 호텔의 웹사이트로부터 데이터를 걷어내는 일종의 코드를 작성
- 그렇다면 그 HTML과 상호 작용하거나 혹은 아마도 도움이 될만한 라이브러리를 사용하는 것일 수도 있음.
- 대부분의 경우 트리 구조에 저장된 형태로 데이터가 반환

<br/>

- 스케쥴러(작업 우선 순위 결정 모듈)를 작성
- 스케쥴되어야 하는 타스크들을 가진 앱을 작성한다면, 어떤 시점에서든지 어떤 타스크의 우선 순위가 가장 높은지를 알아야 하며, 따라서 이진 힙 구조를 사용할 수도 있을 것
- 즉, 이러한 상황에서는 우선 순위 큐와 이진 힙 구조가 적절


<br/>
<br/>

# 🐣  ES2015 클래스 구문개요 및 자료구조 : 클래스 키워드 <span id="2">
## class란?
- 일반적으로 클래스란 사전에 정의된 속성 및 메소드들을 이용해 객체를 생성하기 위한 청사진
- 이제 단방향 연결 리스트 혹은 양방향 연결 리스트을 어떻게 생성하는지 알아보면,
- 양방향 연결 리스트를 위한 패턴을 정의하게 되면 정의한 클래스 혹은 청사진을 이용해 실제로 많은 개별 연결 리스트 객체들을 인스턴스화 시킬 수 있음
- 자바 스크립트에서의 array들과 유사하지만 정확하게 동일하지는 않음
- 새로운 어레이가 먼저 인스턴스화되어야 하고 그 후에야 이 모든 것들에 접근할 수 있기 때문에 기술적으로 class라고 할 수는 없지만, array가 있고 그 array를 일종의 청사진이라 생각하면 이 청사진에 기바한 객체들을 instance화 할 수 있음
- 기본적으로 자바 스크립트는 진정한 객체 지향인적이 없으며, 단지 프로토타입 기반 상속자 혹은 프로토타이핑으로 불리는 무엇인가를 이용하는 것
- 예로 리스트의 인스턴스는 없는 상태라 리스트 하나를 인스턴스화해야함. 노드라고 불리는 아주 짧은 또 다른 클래스. 단방향 연결 리스트 클래스는 내부에서 노드 클래스를 사용.

## class_keyword.js
```
class Student {
    constructor(firstName, lastName, year){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
    }
}

let firstStudent = new Student("Colt", "Steele",1);
let secondStudent = new Student("Blue", "Steele",2);
```
- constructor 생성자 : 새로운 Student instance를 instance화 시킬 때 사용되는 메소드
- 청사진이 만들어졌으면 instace 생성을 위해서는 new 키워드를 사용
- this는 개별 class instance 즉, 개별 "Student" instance를 지칭

<br/>
<br/>

# 🐣  자료구조 : instance 메소드 추가하기 <span id="3">
## 설명1
- 특정 단일 instance의 경우 Student에 적용되는 기능 제공한다고 할 수 있음
- 예를들어 Array 클래스 생성한다 할 때
```
const data = New Array(1,2,3)
data; // (3)[1,2,3]
data.push(99);
data; // (4)[1,2,3,99]
```
- data 는 하나의 instance
- Array에 push 있었기에 사용가능

## 설명2
- 개별 인스턴스에 메소드 생성
- 클래스 단위에서 동작하는 것이 아닌 개별 인스턴스에 관련됨

<br/>
- [1]
instance_methods.js (일부)

```
class Student {
    constructor(firstName, lastName, year){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0;
        this.scores = [];
    }
    fullName(){
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
}
```
- let test = new Student("Hailey", "Ham");을 하고
- test.fullName(); 할 경우
- Your full name is Hailey Ham 이라고 뜸

<br/>
- [2]
instance_methods.js (일부)
- 다음은 지각을 3번 이상 할 수 없도록 만들어보겠음
- 새로운 속성을 생성하는데 tardies로 하고, 초깃값은 0
- 지각 할 때마다 지각을 한번 더하는 method인 markLate 추가
- 우선 Student의 인스턴스의 this.tardies() 호출 필요
- 3번 이상일 경우 경고문구 return문 뜨도록 설정
- 기본적으로 markLate 호출할 때 몇번 지각했는지 return문
- 

```
class Student {
    constructor(firstName, lastName, year){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0;
        this.scores = [];
    }
    fullName(){
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
    markLate(){
        this.tardies += 1;
        if(this.tardies >= 3) {
            return "YOU ARE EXPELLED!!!!"
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
    }
}
```

<br/>
- [3]
instance_methods.js (일부)
- score 입력하도록 설정
- 일단 속성 추가 this.scores = []; 빈값
- test.scores(); // [] 출력됨
- 여기에 addScore(score){this.scores.push(score) return this.scores} 하면
- test.addScore(99); 과
- test.addScore(100); 할 경우
- test.scores(); // (2)[99,100] 뜸
- 직접적으로 test.scores.push 하는 것이 아니라 addScore 통해서 하기 때문에 직접 변경하지 않음

```
class Student {
    constructor(firstName, lastName, year){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0;
        this.scores = [];
    }
    fullName(){
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
    markLate(){
        this.tardies += 1;
        if(this.tardies >= 3) {
            return "YOU ARE EXPELLED!!!!"
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
    }
    addScore(score){
        this.scores.push(score);
        return this.scores
    }
}
```

- 이렇게 한 후에 점수들의 평균을 내고 싶으면
- calculateAverage() 메소드 만들어서 사용

```
    calculateAverage(){
        let sum = this.scores.reduce(function(a,b){return a+b;})
        return sum/this.scores.length;
    }  
```

- 위에서와 같이 this.scores.reduce로 다 더해서
- sum 을 scores 갯수(길이)만큼 나눠서 평균 냄

<br/>
<br/>

# 🐣  자료구조 : class 메소드 추가하기 <span id="4">

## static 키워드
- "static" 키워드는 클래스에 종속되는 반면 클래스의 개별 인스턴스 메소드에는 반드시 종속적일 필요가 없는 메소드 혹은 기능들을 생성하도록 해줌
- MDN 문서 - "스태틱 키워드는 클래스의 스태틱 메소드를 정의합니다."
- MDN 문서 - "스태틱 메소드는 클래스의 인스턴화 없이도 호출될 수 있으며 클래스 인스터스를 통해서는 호출될 수 없습니다."
- 아래를 통해 살펴보면
```
class Student {
    constructor(firstName, lastName, year){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0;
        this.scores = [];
    }
//(생략)
  static EnrollStudents(){
    return "ENROLLING STUDENTS!"
  }
}

let test = new Student("Hailey","Ham",1)
```
- test.EnrollStudents() // 접근불가(호출불가)
- Student.EnrollStudent() // "ENROLLING STUDENTS!"
- 즉, 이 클래스 메소드는 개별 인스턴스와는 무관한 기능
- "Student" 클래스의 한 부분으로 이 메소드가 필요하며, 헬퍼 메소드가 되었던 유틸리티 메소드가 되었던 어떤 식으로든 "Student"와 관련있음
- Student 클래스로 실제 의미 있는 예제 보여주기 어렵기 때문에 다른예제로 다시 살펴보겠음

<br/>

## 예제2
- point_class.js
- MDN 문서 인용 예제
- Point class
- 기본적으로 X와 Y 좌표에 의해 카티시안 평면에 표기되는 하나의 점(point)
이러한 좌표 시스템에서 작업할 경우, 각 "Point"는 X 값과 Y 값을 갖게 되며, 여기 아래에 보이는 것과 같이 새로운 "point"의 좌표를 초기화할 수 있음
- 두 점 사이의 거리를 계산하는 "distance"와 같은 일종의 유틸리티 메소드
- [Math.hypot()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/hypot)
- 이 "static" 키워드로 클래스 메소드를 정의하고, 개별 인스턴스 상에서는 더 이상 이러한 클래스 메소드를 호출하지 않아야 한다는 것
```
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1, p2)); // 7.0710678118654755
```
- [Point 클래스 정의]
- constructor(x, y): 이 함수는 새로운 Point 객체를 생성할 때 호출되며, 객체의 x와 y 좌표를 설정
static distance(a, b): 이 함수는 두 점 (a와 b) 사이의 거리를 계산하는 정적 메서드. 이 메서드는 Point 클래스의 인스턴스가 아닌 클래스 자체에서 호출
<br/>
- [Point 객체 생성]
- const p1 = new Point(5, 5);: p1이라는 이름의 Point 객체를 생성. 이 객체는 x와 y 좌표로 각각 5. 
- const p2 = new Point(10, 10);: p2이라는 이름의 Point 객체를 생성. 이 객체는 x와 y 좌표로 각각 10.
<br/>
- [거리 계산]
- Point.distance(p1, p2);: p1과 p2 사이의 거리를 계산하기 위해 Point 클래스의 정적 메서드 distance를 호출.
- dx = a.x - b.x;: 두 점의 x 좌표 차이를 계산. 여기서는 5 - 10 = -5.
- dy = a.y - b.y;: 두 점의 y 좌표 차이를 계산. 여기서는 5 - 10 = -5.
- Math.hypot(dx, dy);: 피타고라스 정리를 사용하여 두 점 사이의 거리를 계산. Math.hypot(-5, -5)는 sqrt((-5)^2 + (-5)^2)와 동일하며, 결과는 7.0710678118654755.
<br/>
-[결과 출력]
- console.log(Point.distance(p1, p2));: 계산된 거리를 콘솔에 출력. 결과는 7.0710678118654755.

