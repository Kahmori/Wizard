document.addEventListener('DOMContentLoaded', function(){
  
  const nextButton = document.getElementById('next');
  let currentIndex = 1;

  function updateCurrentStep(){
    document.querySelectorAll('.step').forEach(step => {
      step.classList.remove('currentStep');
    });
    document.querySelectorAll('.step')[currentIndex].classList.add('currentStep');
  }

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % document.querySelectorAll('.step').length;
    updateCurrentStep();
  });
});
