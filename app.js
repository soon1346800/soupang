require('dotenv').config();
const express = require('express');
const connect = require('./schemas'); // 몽고DB 접속 과정

const app = express();
app.use(express.json());

connect(); // 실제 몽고DB 접속

// 라우터 설정
const router = require('./routes/products.router');
app.use('/api', router);

app.listen(3000, () => {
    console.log('으로 서버가 열렸습니다.');
});
