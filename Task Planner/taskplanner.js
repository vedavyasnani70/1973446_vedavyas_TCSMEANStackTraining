let http = require("http");
let url = require("url");
let fs = require("fs");
let port = 9999;
let htmlContent = `
        <html>
            <head>
            <h1>Welcome to Task Planner</h1>
            </head>
            <body>
            <form action="" method="get">
        <label>Emp ID</label>
        <input type="text" name="empid"/><br/>

        <label>Task ID</label>
        <input type="text" name="taskid"/><br/>

        <label>Task</label>
        <input type="text" name="task"/><br/>

        <label>DeadLine</label>
        <input type="date" name="deadline"/><br/>

        <input type="submit" value="Add Task"/>
            </form>
            
            </body>
        </html>
`
//convert string to object 
var taskJson = JSON.parse(taskObj);
console.log("Id is "+taskJson.id);
//convert json to string 
var taskString = JSON.stringify(taskJson);
fs.writeFile("task.json",taskString,{flag:"a"},(err)=> {
    if(!err){
        console.log("Record stored successfully...")
    }
})
let server = http.createServer((request,response)=> {
        response.end(htmlContent);
});

server.listen(port,()=>console.log(`Server is running on port number ${port}`));