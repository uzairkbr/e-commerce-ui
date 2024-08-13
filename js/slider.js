function sliderFun(sliderClass, slideClass, dotsClass, prevButtonId, nextButtonId) {
  const slider = document.querySelector(sliderClass);
  const slides = document.querySelectorAll(slideClass);
  const dotsContainer = document.querySelector(dotsClass);
  const prevButton = document.getElementById(prevButtonId);
  const nextButton = document.getElementById(nextButtonId);

  let currentSlide = 0;
  const totalSlides = slides.length;

  for (let i = 0; i < totalSlides; i++) {
      const div = document.createElement("div");
      div.classList.add("slider-dot");
      dotsContainer.appendChild(div);
  }

  const dots = document.querySelectorAll(`${dotsClass} .slider-dot`);

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

sliderFun(".hero-slider", ".hero-slide", ".hero-slider-dots ", "hero-left-icon", "hero-right-icon");
sliderFun(".classic-slider", ".classic-slide", ".classic-slider-dots", "classic-left-icon", "classic-right-icon");
