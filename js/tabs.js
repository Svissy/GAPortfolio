const tabButtons = document.querySelectorAll('.design-list__item');
const tabDescriptions = document.querySelectorAll('.design__descr');
const tabImages = document.querySelectorAll('.design-images');

const changeContent = (array, value) => {
  array.forEach((e) => {
    if (e.dataset.tabsField === value) {
      e.classList.remove("hidden");
    } else {
      e.classList.add("hidden");
    }
  });
};

tabButtons.forEach((tabButton, index) => {
  tabButton.addEventListener('click', (e) => {

    const dataValue = tabButton.dataset.tabsHandler;

    changeContent(tabDescriptions, dataValue);
    changeContent(tabImages, dataValue);

    tabButtons.forEach((btn) => {
      if (btn === e.target) {
        btn.classList.add('design-list__item_active');
      } else {
        btn.classList.remove("design-list__item_active");
      }
    });
  });
});