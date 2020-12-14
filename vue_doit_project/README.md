# vue_todo

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

# web-pack 주요 속성
entry - 웹팩으로 빌드할 대상 파일을 지정하는 속성, entry로 지정한 파일의 내용에는
전체 애플리케이션 로직과 필요 라이브러리를 로딩하는 로직이 들어간다
output - 웹팩으로 빌드한 결과물의 위치와 파일 이름 등 세부 옵션을 설정하는 속성
loader - 빌드할때 HTML, CSS, PNG 등을 자바스크립트로 변환하기 위해 필요한 설정을
정의하는 속성
plugin - 빌드하고 나온 결과물에 대해 추가 기능ㅇ르 제공하는 속성.
예를 들어 결과물의 사이즈를 줄이거나 기타 CSS,HTML 파일로 분리하는 기능
resolve - 웹팩으로 빌드할때 해당 파일이 어떻게 해석되는지 정의하는 속성.
예를 들어 특정 라이브러리를 로딩할때 버전은 어떤걸로 하고 파일 경로는 어디로 지정하는지 

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
