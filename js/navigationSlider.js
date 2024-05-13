document.addEventListener('DOMContentLoaded', function(){
  var slider = tns({
    container: '.slider', 
    items: 1, 
    slideBy: 'page', 
    autoplay: false,
    speed: 5000,
    nav: false,
    controls: false,
    startIndex: 1,
  });
  
  var nextButton = document.getElementById('next');
  var currentIndex = 0;

  nextButton.addEventListener('click', function() {
    
    slider.goTo('next');

    currentIndex = slider.getInfo().index;

    switch(currentIndex) {
      case 2:
        animateBoat(0, 0); 
        break;
      case 3:
        animateBoat(7.5, 22); 
        break;
      case 4:
        animateBoat(-7.5, 22);
        break;
      default:
        break;
    }
  });

  function animateBoat(displacementX, displacementY) {
    var boat = document.getElementById('boat');
    boat.classList.add('animatedBoat');

    boat.style.transform = 'translateX(' + displacementX + 'rem) translateY(' + displacementY + 'px)';

    setTimeout(function() {
      boat.classList.remove('animatedBoat');
    }, 3500); 
  }
});
