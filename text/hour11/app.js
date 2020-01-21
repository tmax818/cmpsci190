function countListItems() {
    var olElement = document.getElementById("toDoList");
    var count = 0;
    for(var i = 0; i < olElement.childNodes.length; i++){
        if(olElement.childNodes[i].nodeType === 1) count++
    }
    alert("the count is: " + count);
}

countListItems();