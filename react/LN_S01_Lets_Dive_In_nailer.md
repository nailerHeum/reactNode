### React 질문 좌표

![image-20181227175528454](/Users/csheum/Desktop/nodeReact/assets/image-20181227175528454-5900928.png)



 goo.gl/T6zQ9q



### React = JavaScript Library

Show content to users and handle user interactions.



### React can work by itself

also work with other libraries, packages, servers and databases..



### Class = Javascript classes

ES2015 기반...



## JSX

= special dialect

어떻게 화면에 보이게 할지 결정



![image-20181227183738139](/Users/csheum/Desktop/nodeReact/assets/image-20181227183738139-5903458.png)



### Learn More About JSX



codepen은 좋지만 전문적 프로젝트에서 자주 쓰지 않는다 

-> new local React project를 만들자!



install create-react-app



babel을 통해 ES6코드를 ES5로 변환하여 보여준다.

그래서 브라우저가 받아들일 수 있도록 함

 



![image-20181229153322458](/Users/csheum/Desktop/nodeReact/assets/image-20181229153322458-6065202.png)





### 7. exploring create-react-app project

![image-20181229153447920](/Users/csheum/Desktop/nodeReact/assets/image-20181229153447920-6065287.png)

### public

> static files - images... etc..

### node_modules

> dependencies

### package.json

- 의존성 라이브러리들 명시
- 패키지 관련 정보 명시

### README.md

- 사용법

### .gitignore

- 보안 관련 file들 git에 올리지마라

 **nodejs 를 기본으로 react라는 프레임워크를 사용하는 것으로 생각하면 편할듯**



port number는 원하는대로 설정할 수 있으며

이미 사용중인 port number를 알아서 피해준다



### 9. javascript module systems



src 내부 파일 다 지우고 index.js 생성



import React from 'react'

- React라는 이름으로
- react라는 library에서 가져온다

이에 대한 **구동방식**

> node_modules directory에서
>
> react라는 애를 갖고 와서 React라는 애한테 집어넣는다!



import statement 는 require의 ES6 방식이다

const React = require('react'); 를 대체한다. 



- commonJS란? >> JS를 serverside에서 사용하기 위한 문법 표준을 따르는 js



### 10.Displaying content with Functional Components

![image-20181229155811668](/Users/csheum/Desktop/nodeReact/assets/image-20181229155811668-6066691.png)

JSX를 사용하여 user에게 보여주기 먼저



root 라는 id를 통해 render시킨다.



```react
// import react and reactDOM
import React from 'react';
import ReactDOM from 'react-dom';

// create react components
const App = () => {
  return <div>Hi there</div>
}
// take the react components and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
```



OUTPUT

\> Hi there



**Document.querySelector()**는 제공한 선택자 또는 선택자 뭉치와 일치하는 문서 내 첫 번째 [`Element`](https://developer.mozilla.org/ko/docs/Web/API/Element)를 반환한다.

>  탐색방식은 depth-first, pre-order이고 시작점은 문서의 첫번째 요소이다.



#### Webpack이란?

**project의 구조를 분석하고 javascript module을 비롯한 resource들을 찾은 다음 이를 browser에서 이용할 수 있는 bundle로 묶고 packing하는 module bundler**

single program으로 작동하는 하나의 file을 multiple files로 분할하고 구성할 수 있는 js module의 필요성에 의해 생겨남















