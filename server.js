const express = require('express');

const app = express();

app.get("/server", (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader("Access-Control-Allow-Origin", "*")
    //设置响应体
    // response.send("HELLO AJAX JSON");

    const data = {
        name: 'atguigu'
    }
    let str = JSON.stringify(data);

    response.send(str)
})

app.get("/ie", (request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.send("HELLO AJAX IE")
})

//延时响应
app.get("/delay", (request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    setTimeout(() => {
        response.send("延时响应")
    }, 3000)
})

//jQuery服务
app.get("/jquery-server", (request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.send('Hello jQuery');

})

app.post("/server", (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader("Access-Control-Allow-Origin", "*")
    //设置响应体
    response.send("HELLO AJAX");
})

app.listen(3000, () => {
    console.log("App is running on port 3000")
})