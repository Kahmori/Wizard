const adventures = [
  {image: './images/royal-caribbean-logo.svg', title: 'Royal Caribbean'},
  {image: './images/costa-logo.svg', title: 'Costa'},
  {image: './images/disney-cruise-line-logo.svg', title: 'Disney Cruise Line'},
  {image: './images/msc-logo.svg', title: 'MSC'},
  {image: './images/norwegian-logo.svg', title: 'Norwegian'},
  {image: './images/oceania-logo.svg', title: 'Oceania'},
]

function renderCards(){

  const cardContainer = document.getElementById('caroussel');

  cardContainer.innerHTML = '';

  adventures.forEach(adventure => {
    const card = document.createElement('div');
    
    card.classList.add('cards');
    card.innerHTML =
    `<img src=${adventure.image} alt=""/>
    <p>${adventure.title}</p>
    `;

    cardContainer.appendChild(card);
  });

  const arrow = document.createElement('div');
  arrow.innerHTML = `
  <span id="nextAdventure">
    <img src="./images/Arrow.svg" alt="" />
  </span>`

  cardContainer.appendChild(arrow);
}

document.addEventListener('DOMContentLoaded', function(){
  renderCards();
})