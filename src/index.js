import fetchCountries from './js/fetchCountries';
import updateCountriesMarkup from './js/update-countries-markup';
import refs from './js/refs';
import countryMarkup from './js/countryMarkup';
import { successNotify } from './js/notify';
import './styles.css';

const debounce = require('lodash.debounce');
refs.searchInput.addEventListener('input', debounce(inputChangeHandler, 500));

function inputChangeHandler(event) {
  const inputValue = event.target.value.trim();

  clearfindedCountries();
  clearselectedCountry();

  fetchCountries(inputValue).then(countries => queryResult(countries));
}

function queryResult(countries) {
  if (countries.length === 1) {
    countryMarkup(countries);
    successNotify();
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
