const inputBox = document.getElementById("input-text");
const listContainer = document.getElementById("list-container");

function addTask(){
    if( inputBox.value === ''){
        alert("You must enter something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        // this will add the x mark in the list at the end using the css 
        // this will be aligned
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span); 
    }

    inputBox.value = "";
    saveData();
}

// when i click inside the listcontainer and the click is on the li then 
// it will change it to checked if already checked then it will remove 
// because it is toggle
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    // if i click on the span then it will remove the parent of that sapn
    // e.i the li in the list
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

// listContainer.addEventListener("keypress",function(event)){
//     if(event.key === "Enter"){
//         e.target.classList.toggle("checked").click();
//         saveData();
//     }
// });

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data");

}

showData();