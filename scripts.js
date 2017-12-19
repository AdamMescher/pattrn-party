const accordionTabsViewCodeButton = document.getElementsByClassName('accordion-tabs-view-code-button')[0];
const flexibleCardsViewCodeButton = document.getElementsByClassName('flexible-card-view-code-button')[0];
const headerBarViewCodeButton = document.getElementsByClassName('header-bar-view-code-button')[0];
const changeButtonText = button => {
  if(button.text() === 'view code'){
    return button.text('hide code');
  }
  button.text('view code');
};

accordionTabsViewCodeButton.addEventListener('click', () => {
  $('.codepen__embed').toggleClass('hidden');
  changeButtonText($('.accordion-tabs-view-code-button'));
});

flexibleCardsViewCodeButton.addEventListener('click', () => {
  
});

headerBarViewCodeButton.addEventListener('click', () => {
  
});

