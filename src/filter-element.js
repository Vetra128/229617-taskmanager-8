const getFilterElement = (caption, amound = 0, isChecked = false) => {
  const captionLowerCase = caption.toLowerCase();
  return `<input 
          type="radio" 
          id="filter__${captionLowerCase}" 
          class="filter__input visually-hidden" 
          name="filter" ${isChecked ? `checked` : ``}
          />
  <label 
  for="filter__${caption.toLowerCase()}"
   class="filter__label">
  ${caption} <span class="filter__${captionLowerCase}-count">${amound}</span>
  </label>`;
};
export default getFilterElement;
