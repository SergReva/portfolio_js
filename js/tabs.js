const tabButtons = document.querySelectorAll('.design-list__item'),
  tabDescriptions = document.querySelectorAll('.design__descr'),
  tabImages = document.querySelectorAll('.design-images'),
  tabMainImage = document.querySelectorAll('.design-block__img'),
  tabTitle = document.querySelectorAll('.design__title');

const changeContent = (array, value) => {
  array.forEach((e) => {
    if (e.dataset.tabsField === value) {
      e.classList.remove('hidden');
    } else {
      e.classList.add('hidden');
    }
  })
};

tabTitle.forEach((title)=>{
  if (title.classList.contains('hidden')) {
    title.dataset.tabsField = 'body';
  } else {
    title.dataset.tabsField = 'interior';
  }
})

tabButtons.forEach((tabButton) => {
  tabButton.addEventListener('click', (e) => {
    const dataValue = tabButton.dataset.tabsHandler;
    
    changeContent(tabDescriptions, dataValue);
    changeContent(tabImages, dataValue);
    changeContent(tabMainImage, dataValue);
    changeContent(tabTitle, dataValue);
    
    tabButtons.forEach((btn) => {
      if (btn === e.target) {
        btn.classList.add('design-list__item_active');
        document.title = tabTitle[1].innerText + ' - Mercedes Benz';
      } else {
        btn.classList.remove('design-list__item_active');
        document.title = tabTitle[0].innerText + ' - Mercedes Benz';
      }
    })
  })
})