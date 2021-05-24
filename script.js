var addButton = document.getElementById("addButton");
var rmButton = document.getElementById("rmButton");
var mainInput = document.getElementById("mainInput");
var ul = document.querySelector("ul");
// var allLi = document.querySelectorAll("li");

addButton.addEventListener("click", function () {
    if (mainInput.value.length > 0) {
        // make list tag
        var li = document.createElement("li");

        // make checkbox tag and edit it
        var checkbox = document.createElement("input");
        checkbox.className = "checkbox";
        checkbox.setAttribute("type", "checkbox");

        // write note
        var noteBox = document.createElement("div");
        var note = document.createTextNode(mainInput.value);
        noteBox.appendChild(note);

        // make remove button 
        var rm = document.createElement("button");
        var x = document.createTextNode("x");
        rm.appendChild(x);
        rm.setAttribute("class", "remove");

        // placed everything
        li.appendChild(checkbox);
        li.appendChild(noteBox);
        li.appendChild(rm);
        ul.appendChild(li);

        // clean the input
        mainInput.value = null;
    }
});

mainInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addButton.click();
    }
})

rmButton.addEventListener("click", function () {
    var allLi = document.querySelectorAll("li");
    for (let i = 0; i < allLi.length; i++) {
        allLi[i].remove();
    }
})

function selectAllRmButtons() {
    var littleRm = document.querySelectorAll(".remove");
    console.log(littleRm);
}

ul.addEventListener("click", function (event) {
    if (event.target.className === "remove") {
        event.target.parentElement.remove();
    } else if (event.target.className === "checkbox") {
        let txt = event.target.parentElement.children[1];
        txt.classList.toggle("done");
    }
})