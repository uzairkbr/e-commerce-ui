// Navbar Link List on mobile menu
(function () {
  const hamburgerMenu = document.getElementById("hamburger-icon");
  const navbarLinkList = document.querySelector(".navbar__link-list");
  const body = document.body;

  hamburgerMenu.addEventListener("click", function() {
    if (navbarLinkList){
      navbarLinkList.classList.toggle("hide");
      const isHide = navbarLinkList.classList.contains("hide");
      body.style.overflow = isHide ? "hidden" : "auto";
    }
    })
})();

const faqs = document.getElementsByClassName("information__question");

for (var i = 0; i < faqs.length; i++) {
  faqs[i].addEventListener("click", function () {
    let answer = this.querySelector('.information__answer');
    
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
    }

    for (var j = 0; j < faqs.length; j++) {
      if (faqs[j] !== this) {
        let otherAnswer = faqs[j].querySelector('.information__answer');
        otherAnswer.style.maxHeight = null;
      }
    }
  });
}
