console.log("This is script1.js loaded!");

function changeColor() {
    document.body.style.backgroundColor = "lightblue";
}

window.onload = function() {
    changeColor();
};
