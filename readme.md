# Boiler-Plate / Clone Cording

## Stacks
<p float='left'> 
  <img src="https://img.shields.io/badge/REACT.js-61DAFB?style=for-the-badge&logo=react&logoColor=white">
  <img src="https://img.shields.io/badge/redux-764abc?style=for-the-badge&logo=redux&logoColor=white">
  <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white">
   <img src="https://img.shields.io/badge/mongodb-47A248?style=for-the-badge&logo=mongodb&logoColor=white">
</p>

## Outline

### 🗄 Express

#### rotue

##### /register
- client에게 받은 회원가입 data로 user 인스턴스 생성, bcript로 암호화 후 DB 저장
##### /login
- client에게 받은 email을 db에서 찾고, 이메일이 존재하면 bcript로 암호 비교후 맞으면 jsonwebtoken으로 토큰을 생성하고 DB에 저장, client 쿠키에 저장
##### /auth
- client에게 받은 token을 jwt로 decode해서 client 토큰과 server 토큰을 비교, 일치시 유저정보 client에 redux store에 저장 
###### /logout
- middleware auth 실행후 찾은 user정보로 DB에서 해당 _id 토큰 삭제

### 🖥 React.js
// 내용


## Error
