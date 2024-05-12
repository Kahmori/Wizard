document.addEventListener('DOMContentLoaded', function(){
  const nextAdventureSpan = document.getElementById('nextAdventure');

  nextAdventureSpan.addEventListener('click', function() {
    const currentAdventure = document.querySelector('.currentAdventure');
    const allAdventures = document.querySelectorAll('.cards');
    let currentIndex = Array.from(allAdventures).indexOf(currentAdventure);

    if (currentIndex !== -1) {
      currentAdventure.classList.remove('currentAdventure');
      const nextIndex = (currentIndex + 1) % allAdventures.length;
      allAdventures[nextIndex].classList.add('currentAdventure');
    }
  });
});