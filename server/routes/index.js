const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('../middleware/passport');
const User = require('../models').User;
const secret = require('../secret');
   
/* GET home page. */
router.get('/', function(req, res, next) {
    let userInfo = {}
    userInfo.userName = ''
    if (req.cookies.user_info) {
        userInfo = jwt.verify(req.cookies.user_info, secret.secretKey)
    }
    res.send(/*html*/`
        <a href="/auth/naver">네아로</a><br><br><br>
        <a href="/auth/google">구글 로그인</a>
        <h1>Hello ${userInfo.userName}</h1>
        [서울, 부산, 제주] 로 검색하세요.
        <form action='/search' method="GET">
         <input type="text" name="area">
         <input type="submit">
        </form>
    `)
})

router.get('/login', function(req, res, next) {
    res.send(/*html*/`
        <a href="/auth/google">구글 로그인</a>
    `)
})



module.exports = router;
