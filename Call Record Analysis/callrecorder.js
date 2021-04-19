let fs=require("fs");
let obj = require("mongoose");
obj.Promise = global.Promise;
let url = "mongodb://localhost:27017/meanstack";

const mongodboption = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

obj.connect(url,mongodboption);
let db = obj.connection;
db.on("error",(err)=>console.log(err));
db.once("open",()=>{

    let callrecordschema = obj.Schema({
        _id:Number,
        source:Number,
        destination:Number,
        sourceLocation:String,
        destinationLocation:String,
        callDuration:String,
        roaming:String,
        callCharge:Number
    });

    let callrecord = obj.model("",callrecordschema,"callrecord");

    fs.readFile("call_data.json",(err,data)=> {
        if(!err){

            let empString = data.toString()
            let empJson = JSON.parse(empString);

            callrecord.insertMany(empJson);
           console.log(empJson);

        }
    })

    callrecord.find({},(err,result)=>{
        if(!err){
             result.forEach(doc=>console.log(doc));
        }
        obj.disconnect();
    })
});