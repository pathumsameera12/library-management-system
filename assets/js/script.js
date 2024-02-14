//Side Bar Collapsed
const toggler = document.querySelector(".nav_button");
const navBar = document.querySelector(".navbar");
var topnavSearchElement = document.getElementById("top_nav-search");
var topNavProfElement = document.getElementById("navbarDropdown");
var featureTitle = document.getElementById("feature-title");



toggler.addEventListener("click", function () {
        //Sidebar collapsed in mobileview
        if (window.innerWidth <= 768) {
                document.querySelector("#sidebar").classList.toggle("collapsed");
                navBar.classList.toggle("collapsed");
                if (topnavSearchElement.style.display === "none") {
                        topnavSearchElement.style.display = "block";
                        topNavProfElement.style.display = "block";

                } else {
                        topnavSearchElement.style.display = "none";
                        topNavProfElement.style.display = "none";

                }




        } else {
                //Sidebar collapsed in desktopview

                document.querySelector("#sidebar").classList.toggle("collapsed");
                document.querySelector("#content").classList.toggle("collapsed");
        }

});

function loadDashboard() {
        document.getElementById("category").style.display = "none";
        document.getElementById("Add_category").style.display = "none";
        featureTitle.textContent = "Dashboard";



}


function loadCategory() {
        document.getElementById("category").style.display = "block";
        document.getElementById("Add_category").style.display = "none";
        featureTitle.textContent = "Dashboard";



}
function loadAddCategory() {
        document.getElementById("Add_category").style.display = "block";
        featureTitle.textContent = "Dashboard";



}