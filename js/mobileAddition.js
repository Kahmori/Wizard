document.addEventListener('DOMContentLoaded', function() {

var mobilePin = document.createElement("div");
mobilePin.classList.add("mobilePin");

var pinIcon = document.createElement("img");
pinIcon.src = "images/Pin.svg"; 

var pinText = document.createElement("p");
pinText.textContent = "Captain Marvin’s Stingray City Sandbar half day trip";

mobilePin.appendChild(pinIcon);
mobilePin.appendChild(pinText);

var container = document.querySelector('.mainContainer');
container.appendChild(mobilePin);

});