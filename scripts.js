const accordionTabsViewCodeButton = document.getElementsByClassName('accordion-tabs-view-code-button')[0];
const flexibleCardsViewCodeButton = document.getElementsByClassName('flexible-card-view-code-button')[0];
const headerBarViewCodeButton = document.getElementsByClassName('header-bar-view-code-button')[0];
const headerBarMenuButton = document.getElementsByClassName('header-bar__menu-button')[0];
const headerBarNavList = document.getElementsByClassName('header-bar__nav__list')[0];
const headerBarSearchContainer = document.getElementsByClassName('header-bar__search-container')[0];

const changeButtonText = button => {
  if(button.text() === 'view code'){
    return button.text('hide code');
  }
  button.text('view code');
};

accordionTabsViewCodeButton.addEventListener('click', () => {
  $('.accordion-tabs__codepen').toggleClass('hidden');
  changeButtonText($('.accordion-tabs-view-code-button'));
});

flexibleCardsViewCodeButton.addEventListener('click', () => {
  $('.flexible-cards__codepen').toggleClass('hidden');
  changeButtonText($('.flexible-card-view-code-button'));
});

headerBarViewCodeButton.addEventListener('click', function(){
  $('.header-bar__codepen').toggleClass('hidden');
  changeButtonText($('.flexible-card-view-code-button'));
});

headerBarMenuButton.addEventListener('click', () => {
  $('.header-bar__nav__list').toggleClass('hidden');
  $('.header-bar__search-container').toggleClass('hidden');
});

