function sliderFun(sliderClass, slideClass, paginationClass, prevButtonClass, nextButtonClass) {
  const slider = document.querySelector(sliderClass);
  const slides = document.querySelectorAll(slideClass);
  const paginationContainer = document.querySelector(paginationClass);
  const prevButton = document.querySelector(prevButtonClass);
  const nextButton = document.querySelector(nextButtonClass);

  const maxSlides = slides.length;
  let currentSlide = 0;

  for (let i = 0; i < maxSlides; i++) {
    const div = document.createElement("div");
    div.classList.add("slider-pagination");
    paginationContainer.appendChild(div);
  }

  const paginationDots = document.querySelectorAll(`${paginationClass} .slider-pagination`);

  paginationDots.forEach((dot, index) => {
    dot.addEventListener("click", function() {
      currentSlide = index;
      renderSlide(currentSlide);
    })
  })

  const renderSlide = function(slide) {
    slides.forEach((s, index) => {
      s.style.transform = `translateX(${100 * (index - slide)}%)`;
      paginationDots[index].classList.remove("active-dot");
    });

    paginationDots[slide].classList.add("active-dot");
  }

  nextButton.addEventListener("click", function() {
    currentSlide = currentSlide < maxSlides - 1 ? ++currentSlide : 0;
    renderSlide(currentSlide);
  });

  prevButton.addEventListener("click", function() {
    currentSlide = currentSlide === 0 ? maxSlides - 1 : --currentSlide; 
    renderSlide(currentSlide);
  })



  renderSlide(0);
}

sliderFun(".hero__slider", ".hero__slide", ".hero__slider-pagination ", ".hero__left-arrow", ".hero__right-arrow");
sliderFun(".classic-product__slider", ".classic-product__slide", ".classic__slider-pagination", ".classic__left-arrow", ".classic__right-arrow");

