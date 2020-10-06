function fetchCountries(searchQuery) {
  const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;
  if (!searchQuery) return;

  return fetch(url)
    .then(resp => resp.json())
    .then(data => data);
}
export default fetchCountries;
