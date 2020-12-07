//express モジュールの読み込み
const express = require('express');

//サーバ作成
const app = express();

//ルーティング
app.get('/',(req,res)=>{
    res.send('Hello Express!');

});

app.listen(3000);

console.log('Server listen: http://localhost:3000');