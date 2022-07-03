function myFunction() {
    const input=document.querySelector("#inputText");
    const task=input.value
    if(!task){
        alert("Please Add Task")
        return;
    }
        const node = document.createElement("li");
        node.classList.add("list-group-item")
        const textnode = document.createTextNode(task);
        node.appendChild(textnode);
        document.getElementById("myList").appendChild(node);
}

function deleteBtn() {
    const list = document.getElementById("myList");
    if (list.hasChildNodes()) {
        list.removeChild(list.children[0]);
    }
}
