import findedCountriesTpl from '../templates/findedCountries.hbs';
import refs from './refs';

function updateCountriesMarkup(data) {
  const markup = findedCountriesTpl(data);
  console.log(data);
  refs.findedCountries.insertAdjacentHTML('beforeend', markup);
}

export default updateCountriesMarkup;
