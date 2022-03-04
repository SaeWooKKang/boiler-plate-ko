# Boiler-Plate / Clone Cording

## ⏳ Period
**2022-02-28 ~ 2022-03-03**
> [John Ahn님의 웹 개발](https://www.inflearn.com/course/따라하며-배우는-노드-리액트-기본/dashboard)

## 🔭 Overview
회원가입, 로그인, 로그아웃, 인증 로직 구현 

![화면-기록-2022-03-03-오후-11 32 31](https://user-images.githubusercontent.com/87258182/156586670-d18daf26-f601-47cf-a142-1801dad52c2d.gif)



## 📚 Stacks
<p float='left'> 
  <img src="https://img.shields.io/badge/REACT.js-61DAFB?style=for-the-badge&logo=react&logoColor=white">
  <img src="https://img.shields.io/badge/redux-764abc?style=for-the-badge&logo=redux&logoColor=white">
  <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white">
   <img src="https://img.shields.io/badge/mongodb-47A248?style=for-the-badge&logo=mongodb&logoColor=white">
</p>


### 🗄 Express

#### route

##### /register
- client에게 받은 회원가입 data로 user 인스턴스 생성, bcript로 암호화 후 DB 저장
##### /login
- client에게 받은 email을 db에서 찾고, 이메일이 존재하면 bcript로 암호 비교후 맞으면 jsonwebtoken으로 토큰을 생성하고 DB에 저장, client 쿠키에 저장
##### /auth
- client에게 받은 token을 jwt로 decode해서 client 토큰과 server 토큰을 비교, 일치시 유저정보 client에 redux store에 저장 
###### /logout
- middleware auth 실행후 찾은 user정보로 DB에서 해당 _id 토큰 삭제

### 🖥 React.js
##### react-route-dom
- 라우팅 
##### http-proxy-middleware 
- cors 문제 해결
##### hoc
- 고차 컴포넌트로 페이지 인증 관리
##### redux
- view Component에서 리덕스를 활용한 비동기 요청 및 상태관리 

## 프로젝트 후기 
막연했던 FE개발이 간단하게나마 DB, Server, Client까지 모두 개발해보면서 어떤식으로 상호작용하는지 감이 잡히는것 같다.  
 
 
이전에 학습했던 HTTP 덕택에 통신 부분에서 쉽게 이해할 수 있었다. 또한 redux의 개념을 복습할 수 있어서 좋았다.  