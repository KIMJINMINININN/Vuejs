# Vue.js 중급강좌 인프런 메모

## Todo Project 및 ES6 정리

1. 뷰 CLI 이용한 프로젝트 구성 방법

2. 컴포넌트 기반 설계 방법

3. 컴포넌트 구조화 및 컴포넌트 통신 방법

4. ES6를 이용한 효울적이고 간결한 뷰 코딩 방법

5. Vuex를 이용한 상태 관리의 이해 및 적용 방법


- 개발 환경 설정
vetur , TSLint 설치

- 최근의 CLI 방향
npm install -g @vue/cli을 사용해서 3.0을 설치하고나면(지금은 4.0버전이엇다)
webpack.config 파일이 없는것을 확인할수 있는데 이것은 입문자, 초보자들의
config 파일 설정을 어렵게하지않아도 되게 만들어주려는 진입장벽을 낮추어주는 방법이었다.

Vetur를 사용하면 vue하고 Tab을 누르면 구조가 간단하게 만들어진다.

meta viewport -> 반응형웹 이라는것을 설정하는 태그이다.

favicon 생성 방법 -> 

awesome icons에서 아이콘을 쉽게 가져올수있다

v-on:keyup.enter="" -> enter key를 눌렀을때 이벤트를 가져오게된다( @keyup.enter="")

ul>li라고 쳐서 tab을 치게되면 ul에 li태그가 만들어진다

할일완료 기능 구현-> 체크할때에 책과는 다른 기능이 추가됫다

localStorage는 Update가 되지않는다. 그래서 Update를 하기위해선 removeItem 이후 다시 setItem해줘야한다.

TodoApp Project 구현
github의 branch는 가지를 만들어서 그때의 코드나 상태를 확인하고싶을때
branch를 만들어서 저장시켜준다.


### TodoApp Project 구현
github의 branch는 가지를 만들어서 그때의 코드나 상태를 확인하고싶을때
branch를 만들어서 저장시켜준다.

### Code Refactory
여튼 vscode에서 [File]-[Preference]-[User Snippet]으로 들어가면 User의 스니펫을 만들어 줄수있다.

안티패턴?? -> 무엇인가

### 사용자 경험 개선
vue에서 alert이 아닌 제공하는 라이브러리를 사용할수잇는것중 modal component
vue.js 홈페이지의 learn -> Examples에 가면 내용을 확인할수있다.

** slot -> 특정 컴포넌트의 특정 UI부분을 변경할수있게 만드는것(다시 한번 재정의하게 만들어준다)
상위 컴포넌트에서 정의해둔곳에서 재정의를 하여서 나타낼수잇게 된다.(중요한 부분)

``
Vue Transitions
트렌지션 -> Vue 에서 제공하는 effect 효과?
1. 구현관점
-> 트렌지션을 입힐때는 클래스의 이름에 따라서 입힐수있다.
(transition-group vue에서 제공해주는 태그 name이 class와 관계가 있다.)

2. 사용관점
-> 디자이너 퍼플리셔가 좋아할만한 기능들이 프레임워크가 많이 들어있다.
``

### ES6
Vue.js 코딩을 간편하게 해주는 부분
const & let, Arrow Function, Enhanced Object Literals, Modules 

Babel
ES5를 transpiling을 해주는 컴파일러

const : 한번 선언값은 변경이 안된다.[const로 지정한 값은 변경이 불가능하지만, 객체나 배열의 내부는 변경이 가능하다.]
let: 한번 선언값은 다시 선언할수가 없다.

ES5 특징 
- 변수의 Scope
기존 자바스크립트(ES5)는 {}에 상관없이 스코프가 설정된다
- 호이스팅
선언한함수와 변수를 해석기가 가장 상단에 있는것 처럼 인식한다 


- {} 단위로 변수의 범위가 제한될수있다.
```
function f(){
    {
        let x;
        {
            //새로운 블록안에 새로운 x의 스코프가 생기게된다.
            const x = "sneaky";
            x = "foo";
        }
        x = "bar";
        let x = "inner";
    }
}
```

- Arrow Function - 화살표 함수
function 이라는 키워드 대신 =>로 대체, 즉 콜백함수 문법을 간결하게 만든다.
```
function(){

}
() => {

}
```

- 속성 메서드의 축약 특징
var dictionary = {
    words: 100,
//ES5
lookup : function(){
    console.log("find words");
},
//ES6
lookup(){
    console.log("find words");
}
}
:function을 지우고 사용하면된다(개간단)

- 속성명 축약 하기
var figures = 10;
var dictionary = {
    //figures : figures, //es5
    figures //es6
}
vscode 단축키 같은것을 고칠때에 컨트롤+D를 누르면 같은것에 대해서 선택이된다.

- Modules(자바스크립트 모듈화 방법) 
Why? 사용하는가
es5에서는 모듈화 방법이 없었다.
code의 재사용성이 많은 부분을 재사용을 하기위해서 module을 만들어두고
계속해서 재사용하기위해서 보통은 사용된다. -> Java에서 class로 나누어서 사용하는것 처럼

Vue.js에서의 export default
한개의 파일에서 한개만 export가 되게한다.
다른파일의 내용이 들어가는것이 아니라 딱 필요한 부분만 가져가기위해서 사용하게된다.

## Vuex 내용

복잡한 애플리케이션의 컴포넌트들을 효율적으로 관리하는 Vuex
Vuex 라이브러리의 등장 배경인 Flux 패턴
Vuex 라이브러리의 주요 속성인 state(data), getters(computed), mutations(methods), actions(비동기 methods)
Vuex 쉽게 코딩하는 Helper 함수  
Vuex 프로젝트 구조화하는 방법 및 모듈 구조화 방법

### Vuex 라이브러리
Vuex
-> 무수히 많은 컴포넌트의 데이터를 관리하기 위한 상태 관리 패턴이자 라이브러리
React의 Flux 패턴에서 기인하였으며
Vue.js 중고급 개발자의 필수 관문

### Flux
Flux란?
Action -> Dispathcer -> Model -> View
MVC 패턴의 복잡한 데이터 흐름 문제를 해결하는 개발 패턴
1.action : 화면에서 발생하는 이벤트 또는 사용자의 입력
2.dispatcher : 데이터를 변경하는 방법, 메서드
3.model : 화면에 표시할 데이터
4.view : 사용자에게 비춰지는 화면

MVC
Controller -> Model -> View

Flux
Acrtion -> Dispatcher -> Model -> View

MVC 패턴의 문제점
기능 추가 및 변경에 따라 생기는 문제점을 예측할수가없다
앱이 복잡해지면서 생기는 업데이트 루프 때문
따라서 Flux 패턴의 단방향 데이터 흐름으로 여러갈래로 나뉘지않고 생기는 문제점 같은것들이
쉽게 파악이 될수있다.

### Vuex 컨셉과 구조



### Vuex 설치 및 시작

### Vuex 기술 요소(state, getters, mutations, actions)

### Vuex Helpers

### Vuex로 프로젝트 구조화 및 모듈화 방법