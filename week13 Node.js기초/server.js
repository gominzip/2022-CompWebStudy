const express = require('express');
const app = express();

app.listen(8080, function(){
    console.log('listening on 8080')
});

//누군가가 pet으로 방문을 하면..
//pet관련된 안내문을 띄워주자

app.get('/beauty', function(요청, 응답){
    응답.send('뷰티용품을 쇼핑할 수 있는 사이트입니다.')
});

app.get('/comp', function(요청, 응답){  // / 만 쓰면 홈
    응답.sendFile(__dirname + '/index.html')
});


