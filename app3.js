

document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.getElementById("nostra_subtitle");
    const menuicon = document.getElementById("menu-btn");
    const closenav = document.getElementById("closenav");

    menuicon.addEventListener("click", function () {
        sidebar.style.right = "0";
    });

    closenav.addEventListener("click", function () {
        sidebar.style.right = "-80%";
    });
});