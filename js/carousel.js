//Carousel buttons function section
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.carousel-unit').classList.add('active');
  
    const carouselUnits = document.querySelectorAll('.carousel-unit');
    const totalUnits = carouselUnits.length;
    let currentUnit = 0;
  
    document.getElementById('moveRight').addEventListener('click', function() {
      let nextUnit = currentUnit;
      currentUnit = (currentUnit + 1) % totalUnits; 
      setSlide(nextUnit, currentUnit);
    });
  
    document.getElementById('moveLeft').addEventListener('click', function() {
      let prevUnit = currentUnit;
      currentUnit = (currentUnit - 1 + totalUnits) % totalUnits; 
      setSlide(prevUnit, currentUnit);
    });
  
    function setSlide(prevUnit, nextUnit) {
      carouselUnits[prevUnit].classList.remove('active');
      carouselUnits[nextUnit].classList.add('active');
    }
  });