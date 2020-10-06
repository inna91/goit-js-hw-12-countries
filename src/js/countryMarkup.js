import selectedCountryTpl from '../templates/selectedCountry.hbs';
import refs from './refs';

function countryMarkup(data) {
  const layout = selectedCountryTpl(data);
  refs.selectedCountry.insertAdjacentHTML('beforeend', layout);
}

export default countryMarkup;
