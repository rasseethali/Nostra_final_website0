var search = document.getElementById("search-bar");
var container = document.getElementById("product-over");
var h1list = container.querySelectorAll("h1");

search.addEventListener('keyup', function(event) {
    var enteredValue = event.target.value.toUpperCase();
    
    for (let count = 0; count < h1list.length; count++) {
        let productName = h1list[count].textContent.toUpperCase();
        
        if (productName.indexOf(enteredValue) < 0) {
            h1list[count].parentElement.style.display = "none"; 
        } else {
            h1list[count].parentElement.style.display = "block"; 
        }
    }
});



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
