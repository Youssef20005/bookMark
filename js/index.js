var book=document.getElementById("book");
var url=document.getElementById("url");
var add=document.getElementById("add");
var siteStore=[];
if(localStorage.getItem("bookList")!=null){
    siteStore=JSON.parse(localStorage.getItem("bookList"));
    displayInfo(siteStore);
}
function addBook(){
    var store={
        url:url.value,
        book:book.value
    }
    siteStore.push(store);
    localStorage.setItem("bookList",JSON.stringify(siteStore));
   
    displayInfo(siteStore);
    clear();
}

function displayInfo(plist){
    var carton=``;
for(var i=0;i<plist.length;i++)
{
    carton +=`
    <tr>
    <td>${i}</td>
    <td>${siteStore[i].book}</td>
    <td><button onclick=visit(${i}) class="btn btn-outline-warning"><i class="fa-solid fa-eye"></i> Visit</button></td>
        <td><button onclick=deletebook(${i}) class="btn btn-outline-danger "><i class="fa-regular fa-trash-can"></i> Delete</button></td>
        </tr>
    `
}
document.getElementById("demo").innerHTML=carton;
}
function clear(){
  book.value="";
  url.value="";
}
function deletebook(index){
    siteStore.splice(index,1);
    localStorage.setItem("bookList",JSON.stringify(siteStore));
    displayInfo(siteStore);
}
function visit(index){
    var urlToVisit = siteStore[index].url;
    window.open(urlToVisit, '_blank');
}