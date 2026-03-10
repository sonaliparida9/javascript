const startBtn = document.getElementById("startBtn");
const startMenu = document.getElementById("startMenu");
const desktop = document.getElementById("desktop");
const contextMenu = document.getElementById("contextMenu");

/* Start Menu Open */

startBtn.addEventListener("click", () => {

    if(startMenu.style.display === "block"){
        startMenu.style.display = "none";
    }else{
        startMenu.style.display = "block";
    }

});

/* Right Click Menu */

desktop.addEventListener("contextmenu", (e) => {

    e.preventDefault();

    contextMenu.style.display = "block";
    contextMenu.style.left = e.pageX + "px";
    contextMenu.style.top = e.pageY + "px";

});

/* Click anywhere hide menu */

document.addEventListener("click", () => {

    contextMenu.style.display = "none";

});