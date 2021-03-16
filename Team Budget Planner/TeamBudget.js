
var budgetObj =[];
function storeInSession() {
    sessionStorage.setItem("clientInfo",budgetObj)
}
function retrieveFromSession() {
    var obj = sessionStorage.getItem("clientInfo");
    console.log(obj);
}
function onFormSubmit(){
    var data = readFormData();
    insertNewRecord(data);
    budgetObj.push(data);      
    resetData();
    
}

function readFormData() {
    var obj = {}    // empty object
    obj.ClientName = document.getElementById("clientname").value;
    obj.ProjectName = document.getElementById("projectname").value;
    obj.Budget = document.getElementById("budget").value;
    console.log(obj);
    return obj; 
}
function insertNewRecord(data){
 var table = document.getElementById("teamPlanList")
 var body = table.getElementsByTagName("tbody")[0];
 var newRow = body.insertRow(body.length);  // row created 

 var cell1 = newRow.insertCell(0);          // cell created 
 cell1.innerHTML=data.ClientName;                 // value placed 

 var cell2 = newRow.insertCell(1);          // cell created 
 cell2.innerHTML=data.ProjectName;      
 
 var cell3 = newRow.insertCell(2);          // cell created 
 cell3.innerHTML=data.Budget;  // value placed

}

function resetData() {
document.getElementById("clientname").value="";
document.getElementById("projectname").value="";
document.getElementById("budget").value="";
}

function passvalues(){
    var clientname1=document.getElementById("clientname").value;
    localStorage.setItem("textvalue1",clientname1);
    var projectname1=document.getElementById("projectname").value;
    localStorage.setItem("textvalue2",projectname1);
    var budget1=document.getElementById("budget").value;
    localStorage.setItem("textvalue3",budget1);
    }
    
/*var budgetObject = budgetObj;
var budgetString = JSON.stringify(budgetObject);
var budgetJson = JSON.parse(budgetString);
document.write("<br/>")
document.write(budgetJson)
document.write(" "+budgetJson.ClientName)
document.write(" "+budgetJson.ProjectName)
document.write(" "+budgetJson.Budget)*/

