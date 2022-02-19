'use strict';

let dropdown = document.getElementById('dropdown');
let dropdownItems = document.querySelectorAll('.dropdownItem');
let dropdownArrow = document.getElementById('dropdownArrow');
let subMenu = document.getElementById('subMenu');

dropdown.addEventListener('click', () => {
  if (dropdownArrow.dataset.direction === 'right') {
    dropdownArrow.dataset.direction = 'down';
    dropdownArrow.textContent = '\u25bc';
  } else {
    dropdownArrow.dataset.direction = 'right';
    dropdownArrow.textContent = '\u25b6';
  }

  subMenu.classList.toggle('show');
  
  dropdownItems.forEach(item => {
    item.classList.toggle('show');
  })
})