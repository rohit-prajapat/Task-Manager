
let btn = document.querySelector("#add");
let dataList = document.querySelector("#task");


btn.addEventListener("click",function(){
    
    let input = document.querySelector(".input");
   
    let data = input.value;
    input.value = "";
    let newBox = document.createElement("div");

   
    dataList.prepend(newBox);
    newtext = document.createElement("p");
    newtext.innerText = data;

    removeButton = document.createElement("button");
    removeButton.innerText = "X";
    removeButton.classList.add("removeButton");
    newBox.append(newtext);
    newBox.append(removeButton);

    newBox.classList.add("newbox");

})

dataList.addEventListener("click", function(event) {
    // Check if the clicked element is a remove button
    if (event.target.classList.contains("removeButton")) {
        // If so, remove the parent box
        let boxToRemove = event.target.closest(".newbox");
        boxToRemove.remove();
    }
});

