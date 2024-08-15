function sliderFun(sliderClass, slideClass, dotsClass, prevButtonId, nextButtonId) {
  const slider = document.querySelector(sliderClass);
  const slides = document.querySelectorAll(slideClass);
  const dotsContainer = document.querySelector(dotsClass);
  const prevButton = document.querySelector(prevButtonId);
  const nextButton = document.querySelector(nextButtonId);

  let currentSlide = 0;
  const totalSlides = slides.length;

  for (let i = 0; i < totalSlides; i++) {
    const div = document.createElement("div");
    div.classList.add("slider-pagination");
    dotsContainer.appendChild(div);
  }

  const dots = document.querySelectorAll(`${dotsClass} .slider-pagination`);

  const resetSlides = () => {
    for (let i = 0; i < totalSlides; i++) {
      slides[i].style.display = "none";
      dots[i].style.opacity = "0.5";
    }
  };

  dots.forEach((dot, index) => {
    dot.addEventListener("click", function() {
      currentSlide = index;
      renderSlide();
    })
  })

  const renderSlide = () => {
    resetSlides();
    slides[currentSlide].style.display = "block";
    dots[currentSlide].style.opacity = "1";
  };

  prevButton.addEventListener("click", function () {
    currentSlide = currentSlide > 0 ? --currentSlide : totalSlides - 1;
    renderSlide();
  });

  nextButton.addEventListener("click", function () {
    currentSlide = currentSlide < totalSlides - 1 ? ++currentSlide : 0;
    renderSlide();
  });

  renderSlide();
}

sliderFun(".hero__slider", ".hero__slide", ".hero__slider-pagination ", ".hero__left-arrow", ".hero__right-arrow");
sliderFun(".classic-slider", ".classic-slide", ".classic-slider-pagination", ".classic-left-arrow", ".classic-right-arrow");

