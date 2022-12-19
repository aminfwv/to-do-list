let list = document.querySelector("#to-do-list");
let searchInput = document.querySelector("#search-form input");
let addInput = document.querySelector(".add-input");
let addBtn = document.querySelector(".add-btn");

list.addEventListener("click", (e)=>{
    if(e.target.nodeName == "SPAN" && e.target.className == "delete-btn"){
        e.target.parentNode.remove();
        if(list.children.length == 0){
            let emptyMassage = document.createElement("div");
            emptyMassage.style.textAlign = "center";
            emptyMassage.style.color = "#333";
            emptyMassage.innerText = "Your list is empty!";
            emptyMassage.id = "empty-Massage";
            list.appendChild(emptyMassage);
        }
    }
});

addBtn.addEventListener("click", (e)=>{
    if(!addInput.value){
        return
    }
    if(document.querySelector("#empty-Massage")){
        document.querySelector("#empty-Massage").remove();
    }
    list.append(createListItem(addInput.value));
    addInput.value = "";
});

function createListItem(itemValue){
    let item = document.createElement("li");
    let title = document.createElement("span");
    let btn = document.createElement("span");
    item.className = "to-do-list";
    title.className = "title";
    title.innerText = itemValue;
    btn.className = "delete-btn";
    btn.innerText = "Delete";
    item.appendChild(title);
    item.appendChild(btn);
    return item;
}

searchInput.addEventListener("input", (e)=>{
    Array.from(list.children).forEach(element=>{
        if(document.querySelector("#empty-Massage")){
            return
        }
        if(element.querySelector(".title").innerText.toLowerCase().includes(e.target.value.toLowerCase())){
            element.style.display = "flex";
        }else{
            element.style.display = "none"
        }
    })
});