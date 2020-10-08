import fetchCountries from './js/fetchCountries';
import updateCountriesMarkup from './js/update-countries-markup';
import refs from './js/refs';
import countryMarkup from './js/countryMarkup';
import './styles.css';

const debounce = require('lodash.debounce');
refs.searchInput.addEventListener('input', debounce(inputChangeHandler, 500));

function inputChangeHandler(event) {
  event.preventDefault();
  const inputValue = event.target.value;

  clearfindedCountries();
  clearselectedCountry();

  fetchCountries(inputValue).then(countries => queryResult(countries));
}

function queryResult(countries) {
  if (!countries) return;

  if (countries.length === 1) {
    countryMarkup(countries);
    return;
  } else if (countries.length > 1 && countries.length < 11) {
    updateCountriesMarkup(countries);
    return;
  } else {
    error({
      title: 'To many mathches found. Please enter a more specific query!',
    });
  }
}

function clearfindedCountries() {
  refs.findedCountries.innerHTML = '';
}

function clearselectedCountry() {
  refs.selectedCountry.innerHTML = '';
}
