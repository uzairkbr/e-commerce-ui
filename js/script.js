// Navbar Link List on mobile menu
(function () {
  const hamburgerMenu = document.getElementById("hamburger-icon");
  const navbarLinkList = document.querySelector(".navbar__link-list");
  const body = document.body;

  hamburgerMenu.addEventListener("click", function() {
    if (navbarLinkList){
      navbarLinkList.classList.toggle("list__unhide");
      const isHide = navbarLinkList.classList.contains("list__unhide");
      body.style.overflow = isHide ? "hidden" : "auto";
    }
    })
})();