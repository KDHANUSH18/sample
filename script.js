var popupoverlay = document.querySelector(".add-popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("button")

addpopupbutton.addEventListener("click", function () {
    popupoverlay.style.display = "block"
    popupbox.style.display = "block"
})

var cancel = document.getElementById("cancel-button")

cancel.addEventListener("click", function (event) {
    event.preventDefault()
    popupbox.style.display = "none"
    popupoverlay.style.display = "none"
})
var container = document.querySelector(".container")
var oneinput = document.getElementById("one-input")
var twoinput = document.getElementById("two-input")
var threeinput = document.getElementById("three-input")
var add = document.getElementById("add-button")
add.addEventListener("click", function (event) {
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class", "container-box")
    div.innerHTML = `<h2>${oneinput.value}</h2>
    <h2>${twoinput.value}</h2>
<p>${threeinput.value}</p>
<button onclick="del(event)">DELETE</button>`
    container.append(div)
    popupbox.style.display = "none"
    popupoverlay.style.display = "none"
})

function del(event) {
    event.target.parentElement.remove()
}