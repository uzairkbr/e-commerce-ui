// function imageSlider(sliderClass, slideClass, dotsClass, prevButtonId, nextButtonId) {
//   const slider = document.querySelector(sliderClass);
//   const slides = document.querySelectorAll(slideClass);
//   const dotsContainer = document.querySelector(dotsClass);
//   const prevButton = document.getElementById(prevButtonId);
//   const nextButton = document.getElementById(nextButtonId);

//   let currentSlide = 0;
//   const totalSlides = slides.length;

//   for (let i = 0; i < totalSlides; i++) {
//     const img = document.createElement("img");
//     img.classList.add("slider-dot-image");
//     img.src = slides[i].src;
//     img.alt = `Slide ${i + 1}`;
//     dotsContainer.appendChild(img);
//   }

//   const dots = document.querySelectorAll(`${dotsClass} .slider-dot-image`);

//   const resetSlides = () => {
//     for (let i = 0; i < totalSlides; i++) {
//       slides[i].style.display = "none";
//       dots[i].style.opacity = "0.5";
//     }
//   };

//   const renderSlide = () => {
//     resetSlides();
//     slides[currentSlide].style.display = "block";
//     dots[currentSlide].style.opacity = "1";
//   };

//   dots.forEach((dot, index) => {
//     dot.addEventListener("click", function() {
//       currentSlide = index;
//       renderSlide();
//     });
//   });

//   prevButton.addEventListener("click", function () {
//     currentSlide = currentSlide > 0 ? --currentSlide : totalSlides - 1;
//     renderSlide();
//   });

//   nextButton.addEventListener("click", function () {
//     currentSlide = currentSlide < totalSlides - 1 ? ++currentSlide : 0;
//     renderSlide();
//   });

//   renderSlide();
// }

// imageSlider(".product-slider", ".product-slide", ".product-slider-dots", "product-left-icon", "product-right-icon");



function imageSlider(sliderClass, slideClass, dotsClass, prevButtonId, nextButtonId) {
  const slider = document.querySelector(sliderClass);
  const slides = document.querySelectorAll(slideClass);
  const dotsContainer = document.querySelector(dotsClass);
  const prevButton = document.getElementById(prevButtonId);
  const nextButton = document.getElementById(nextButtonId);

  let currentSlide = 0;
  const totalSlides = slides.length;

  for (let i = 0; i < totalSlides; i++) {
    const img = document.createElement("img");
    img.classList.add("slider-dot-image");
    img.src = slides[i].src;
    img.alt = `Slide ${i + 1}`;
    dotsContainer.appendChild(img);
  }

  const dots = document.querySelectorAll(`${dotsClass} .slider-dot-image`);

  const renderSlide = (slide) => {
    slides.forEach((s, index) => {
      s.style.transform = `translateX(${100 * (index - slide)}%)`;
      s.style.transition = "transform 0.5s ease";
    });

    dots.forEach((dot, index) => {
      dot.style.opacity = index === slide ? "1" : "0.5";
    });
  };

  dots.forEach((dot, index) => {
    dot.addEventListener("click", function() {
      currentSlide = index;
      renderSlide(currentSlide);
    });
  });

  prevButton.addEventListener("click", function () {
    currentSlide = currentSlide > 0 ? --currentSlide : totalSlides - 1;
    renderSlide(currentSlide);
  });

  nextButton.addEventListener("click", function () {
    currentSlide = currentSlide < totalSlides - 1 ? ++currentSlide : 0;
    renderSlide(currentSlide);
  });

  renderSlide(currentSlide);
}

imageSlider(".product-slider", ".product-slide", ".product-slider-dots", "product-left-icon", "product-right-icon");
