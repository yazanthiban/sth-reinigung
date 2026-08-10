const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

// Menü öffnen/schließen
hamburger.addEventListener("click", function (event) {
    event.stopPropagation();

    if (mobileMenu.style.display === "block") {
        mobileMenu.style.display = "none";
    } else {
        mobileMenu.style.display = "block";
    }
});

// Menü schließen, wenn außerhalb geklickt wird
document.addEventListener("click", function (event) {

    if (
        !mobileMenu.contains(event.target) &&
        !hamburger.contains(event.target)
    ) {
        mobileMenu.style.display = "none";
    }

});