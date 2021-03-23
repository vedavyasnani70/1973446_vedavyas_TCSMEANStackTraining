
var empObj =[];

function storeInSession() {
    sessionStorage.setItem("projectinfo",JSON.stringify(empObj))
}
function retrieveFromSession() {
    var obj = JSON.parse(sessionStorage.getItem("projectinfo"));
    console.log(obj);

}
function onFormSubmit(){
    //alert("Event generated...")
    var data = readFormData();
    insertNewRecord(data);
    empObj.push(data);      //in empObj
    resetData();
    console.log('item')
    console.log('price')

}

function readFormData() {
    var obj = {}  // empty object
    let obj1= document.getElementById('item');
    let obj2 = document.getElementById('price')
    console.log(obj);
    return obj;
}
function insertNewRecord(data){
 var table = document.getElementById("details")
 var body = table.getElementsByTagName("tbody")[0];
 var newRow = body.insertRow();  // row created

 var cell1 = newRow.insertCell(0);          // cell created
 cell1.innerHTML=data.item;                 // value placed

 var cell2 = newRow.insertCell(1);          // cell created
 cell2.innerHTML=data.price;                 // value placed
}

function resetData() {
console.log(document.getElementById('item'));
console.log(document.getElementById('price'));
}
