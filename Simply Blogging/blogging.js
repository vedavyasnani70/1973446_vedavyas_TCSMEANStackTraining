var blogData=[];
function storeInSession() {
   // localStorage.setItem("blogInfo",JSON.stringify(blogData));
   sessionStorage.setItem("blogInfo",JSON.stringify(blogData));
}
function retrieveFromSession() {
    //var obj = JSON.parse(localStorage.getItem("blogInfo"));
    var obj = JSON.parse(sessionStorage.getItem("blogInfo"));
    console.log(obj);
}

/*function onFormSubmit(){
    var title = document.getElementById("title").value;
    var desc = document.getElementById("desc").value;
    var imageInfo = document.getElementById("imageId").files[0].name;
    console.log(title)
    console.log(desc);
    console.log(imageInfo);
    document.getElementById("titleInfo").innerHTML=title;
    document.getElementById("descInfo").innerHTML=desc;
    document.getElementById("imageInfo").src=imageInfo;
}*/
function onFormSubmit() {
    var formData = readData();
    insertNewRecords(formData);
    resetForm();
    blogData.push(formData);  
    console.log(blogData)
    console.log(title)
    console.log(desc);
    console.log(imageInfo);
}
function readData() {
    var formData={};
    formData.title=document.getElementById("title").value;
    formData.desc = document.getElementById("desc").value;
    formData.image = document.getElementById("imageId").files[0].name;

    return formData;
}
function insertNewRecords(formData) {
    var table = document.getElementById("blogDetails");
    var tableBody = table.getElementsByTagName("tbody")[0];
    var newRow = tableBody.insertRow(tableBody.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML=formData.title;
    var cell2 =newRow.insertCell(1);
    cell2.innerHTML= formData.desc;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML= formData.image;
 
}
function deleteRec(data){
    var row = data.parentElement.parentElement;
    document.getElementById("blogDetails").deleteRow(row.rowIndex);
}
var data;
function updateRec(data){
    this.data = data;
    var row = data.parentElement.parentElement;
    var cells = row.getElementsByTagName("td");
    var title = cells[0].innerHTML;
    var desc =  cells[1].innerHTML;
    var imageId =  cells[3].innerHTML;

    document.getElementById("title").value=title;
    document.getElementById("desc").value=desc; 
    document.getElementById("imageId").value=image; 
    console.log(image);
}
function resetForm() {
    document.getElementById("title").value="";
    document.getElementById("desc").value=""; 
    document.getElementById("imageId").value=""; 

}

/*var title = titleObj;
var titleString = JSON.stringify(title);
var titleJson = JSON.parse(titleString);
document.write("<br/")
document.write(titleJson)
document.write(""+titleJson.title)
document.write(""+titleJson.desc)
document.write(""+titleJson.imageInfo)*/
