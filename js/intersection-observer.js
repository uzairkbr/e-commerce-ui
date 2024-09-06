const statsContainer = document.querySelector(".stats");
const customers = document.querySelector(".stats__customer-count .h1");
const visitors = document.querySelector(".stats__visitor-count .h1");
const countries = document.querySelector(".stats__countries-count .h1");
const partners = document.querySelector(".stats__partners-count .h1");

const startCounting = (element, endValue, inter, suffix = "") => {
  let startValue = 0;
  const interval = inter;

  const counter = setInterval(() => {
    startValue++;

    element.innerText = startValue + suffix;
    if (startValue >= endValue) {
      clearInterval(counter);
    }
  }, interval);
};

const observerCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      startCounting(customers, 15, 200, "K");
      startCounting(visitors, 150, 20, "K");
      startCounting(countries, 15, 200);
      startCounting(partners, 100, 30, "+");

      observer.unobserve(entry.target);
    }
  });
};

const observerOptions = {
  threshold: 0.5
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

observer.observe(statsContainer);



