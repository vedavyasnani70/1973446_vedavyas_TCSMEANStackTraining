let obj=require("readline-sync");
let fs=require("fs");

let emp = [];
var fileread=fs.readFileSync('emp1.json')
emp=JSON.parse(fileread)
    let fname=obj.question("Enter your First Name: ");
    let lname=obj.question("Enter your Last Name: ");
    debugger;
    let gender=obj.question("Enter your Gender: ");
    let email=obj.question("Enter your EmailId: ");

    data={
      "fname":fname,
      "lname":lname,
      "gender":gender,
      "email":email
    }
    emp.push(data)
    debugger;
emp=JSON.stringify()
fs.writeFile("emp1.json",emp,function (err) {
  if (err) return console.log(err);
});
module.exports={fname,lname,gender}