import error from './notify';

function fetchCountries(searchQuery) {
  const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;
  // if (!searchQuery) return;

  return fetch(url)
    .then(resp => {
      if (resp.ok) {
        return resp.json();
      }
      throw new Error(`Ошибка по адресу ${url}, 
      статус ошибки ${resp.status}!`);
    })
    .catch(err => {
      error({
        title: 'Wrong query! Please try again',
      });
    });
}

export default fetchCountries;
