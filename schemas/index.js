// const mongoose = require("mongoose");

// const connect = () => {
//   mongoose
//     .connect("mongodb://localhost:27017/soupang")
//     .catch(err => console.log(err));
// };

// mongoose.connection.on("error", err => {
//   console.error("몽고디비 연결 에러", err);
// });

// module.exports = connect;

// mongodb 연결
const mongoose = require('mongoose');

const connect = () => {
    mongoose
        .connect(process.env.MONGODB_URI, {
            dbName: process.env.MONGODB_DB_NAME,
        })
        .then(() => console.log('MongoDB 연결에 성공하였습니다.'))
        .catch((err) => console.log(`MongoDB 연결에 실패하였습니다. ${err}`));
};

mongoose.connection.on('error', (err) => {
    console.error('MongoDB 연결 에러', err);
});

module.exports = connect;
