//Responsive Navbar
let mainNav = document.getElementById("js-menu");
let NavToggle = document.getElementById("js-nav-toggle");

NavToggle.addEventListener("click", function() {
    mainNav.classList.toggle('active');

});

// popup form
function openForm(){
    document.getElementById("myform").style.display = "block";
}
function closeForm(){
    document.getElementById("myform").style.display = "none"
}

document.getElementById("openmessage-btn").addEventListener("click", openForm);
document.getElementById("closeform").addEventListener("click", closeForm);
