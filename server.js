//express モジュールの読み込み
const express = require('express');

//サーバ作成
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// ミドルウェア関数
// 全てのリクエスト
app.use((req, res, next) => {
    console.log(`middleware: all. url: ${req.url}`);

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    //次の処理
    next();
});

app.post('/', (req, res) => {
    let result ={
        message:req.body.message,
        datetime: new Date(),
    };
    res.send(result);
});

//ルーティング
app.get('/',(req,res)=>{
    res.send('Hello Express!');

});

app.listen(3000);

console.log('Server listen: http://localhost:3000');