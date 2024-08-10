// Navbar Link List on mobile menu
(function () {
  const hambugerMenu = document.getElementById("hamburger-icon");
  const navbarLinkList = document.getElementById("navbar-link-list");

  hambugerMenu.addEventListener("click", function() {
    if (navbarLinkList){
      navbarLinkList.classList.toggle("unhide-navbar-link-list");
    }
   })
})();

// Rendering Images in Hero section 
(function() {
  const images = document.querySelectorAll(".responsive-image");

  images.forEach(img => {
    const smallImage = img.getAttribute("data-small"); 
    const defaultImage = img.getAttribute("src"); 

    if (window.innerWidth <= 768) {
      img.setAttribute("src", smallImage);
    } else {
      img.setAttribute("src", defaultImage);
    }
  })
})();
