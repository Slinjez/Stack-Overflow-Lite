//the menu
// to change direction use width or height
//import common divs

window.onload = function () {
    document.getElementById("mySidenav").style.height = "100%";
    document.getElementById("mySidenav").style.position = "";
    document.getElementById("mySidenav").style.visibility = "visible";
    document.getElementById("mainContent").style.marginLeft = "200px"
}
function openNav() {
    document.getElementById("mySidenav").style.height = "100%";
    document.getElementById("mySidenav").style.position = "";
    document.getElementById("mySidenav").style.visibility = "visible";
    document.getElementById("mainContent").style.marginLeft = "200px"
}

function closeNav() {
    document.getElementById("mySidenav").style.height = "0";
    document.getElementById("mySidenav").style.position = "none";
    document.getElementById("mySidenav").style.visibility = "hidden";
    document.getElementById("mainContent").style.marginLeft = ""
}
function toggleNav() {
    var curstatus = document.getElementById("mySidenav").style.visibility;
    console.log("height," + curstatus)
    if (curstatus == "hidden") {
        openNav();
    }
    else {
        closeNav();
    }
}