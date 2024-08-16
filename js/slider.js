function sliderFun(sliderClass, slideClass, paginationClass, prevButtonClass, nextButtonClass) {
  const slider = document.querySelector(sliderClass);
  const slides = document.querySelectorAll(slideClass);
  // const paginationContainer = document.querySelector(paginationClass);
  const prevButton = document.querySelector(prevButtonClass);
  const nextButton = document.querySelector(nextButtonClass);

  const maxSlides = slides.length;
  let currentSlide = 0;

  const renderSlide = function(slide) {
    slides.forEach((s, index) => {
      s.style.transform = `translateX(${100 * (index - slide)}%)`;
    });  
  }

  renderSlide(0);

  nextButton.addEventListener("click", function() {
    if (currentSlide < maxSlides - 1){
      currentSlide++;
    } else {
      currentSlide  = 0;
    }

    renderSlide(currentSlide);
  });

  prevButton.addEventListener("click", function() {
    if (currentSlide === 0) {
      currentSlide = maxSlides - 1;
    } else {
      currentSlide--;
    }

    renderSlide(currentSlide);
  })
}



sliderFun(".hero__slider", ".hero__slide", ".hero__slider-pagination ", ".hero__left-arrow", ".hero__right-arrow");
sliderFun(".classic-product__slider", ".classic-product__slide", ".classic-slider-pagination", ".classic__left-arrow", ".classic__right-arrow");

