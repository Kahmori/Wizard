document.addEventListener('DOMContentLoaded', function(){
  const cards = document.querySelectorAll('.cards');
  const nextAdventureButton = document.getElementById('nextAdventure');
  let currentIndex = 0;

  function updateCurrentAdventure() {
    cards.forEach(card => {
      card.classList.remove('currentAdventure');
    });
    cards[currentIndex].classList.add('currentAdventure');
  }

  cards.forEach(function(card, index) {
    card.addEventListener('click', function() {
      currentIndex = index;
      updateCurrentAdventure();
    });
  });

  nextAdventureButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCurrentAdventure();
  });
});