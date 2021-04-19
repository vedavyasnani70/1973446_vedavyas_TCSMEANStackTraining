var express = require("express")
var http = require("http").Server(app);
var io = require("socket.io")(http);
io.on("connection", () =>{
    console.log("a user is connected")
   })
var app = express();
app.use(express.static(__dirname));
var mongoose = require("mongoose");
let url = "mongodb://localhost:27017/meanstack";
var Message = mongoose.model(`Message`,{ name : String, message : String})
var bodyParser = require("body-parser")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.get('/messages', (req, res) => {
    Message.find({},(err, messages)=> {
      res.send(messages);
    })
  })
  app.post('/messages', (req, res) => {
    var message = new Message(req.body);
    message.save((err) =>{
      if(err)
        sendStatus(500);
      res.sendStatus(200);
    })
  })

mongoose.connect(url , (err) => { 
    console.log(`mongodb connected`,err);
 })
 app.post('/messages', (req, res) => {
    var message = new Message(req.body);
    message.save((err) =>{
      if(err)
        sendStatus(500);
      io.emit('message', req.body);
      res.sendStatus(200);
    })
  })







let server = app.listen(3000, () => {
    console.log(`server is running on port`, server.address().port);
   });