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
/*
  var nextButton = document.getElementById('next');

  
  nextButton.addEventListener('click', function() {
    
    slider.goTo('next');

    animateBoat();
  });

  function animateBoat() {
    var boat = document.getElementById('boat');

  boat.classList.add('animatedBoat');

  setTimeout(function() {
    boat.classList.remove('animatedBoat');
  }, 5000);
  }*/

  
  var nextButton = document.getElementById('next');
  var currentIndex = 0;

  nextButton.addEventListener('click', function() {
    
    slider.goTo('next');

    currentIndex = slider.getInfo().index;

    if (currentIndex === slider.getInfo().slideCount - 1) {
      animateBoat('reset');
    } else {
      var displacement = 125;
      animateBoat(displacement);
    }
  });

  function animateBoat(displacement) {
    var boat = document.getElementById('boat');

    boat.classList.add('animatedBoat');

    if (displacement === 'reset') {
      boat.style.transform = 'translateX(-50px)'; 
    } else {
      boat.style.transform = 'translateX(' + displacement + 'px)'; 

    setTimeout(function() {
      boat.classList.remove('animatedBoat');
    }, 5000); 
  }

    }
});
