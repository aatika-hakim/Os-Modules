const express = require("express");
const EventEmitter = require("events");
const app = express();
const event = new EventEmitter();

let count = 0;

event.on("countApi",()=>{
    count++;
    console.log("event calling",count);
})


app.get("/",(req,res)=>{
    res.send("hello")
    event.emit("countApi");
})

app.post("/",(req,res)=>{
    res.send("hello")
})

app.listen(5000);
// const os = require('os');
// console.log(os.arch());
// console.log(os.freemem()/(1024*1024*1024));
// console.log(os.totalmem()/(1024*1024*1024));






