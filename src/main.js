'use strict';
const getFilterElement = (caption, amound = 0, isChecked = false) => {
  return `<input 
          type="radio" 
          id="filter__${caption.toLowerCase()}" 
          class="filter__input visually-hidden" 
          name="filter" ${isChecked ? `checked` : ``}
          />
  <label 
  for="filter__${caption.toLowerCase()}"
   class="filter__label">
  ${caption}<span class="filter__${caption.toLowerCase()}-count">${amound}</span>
  </label>`;
};
