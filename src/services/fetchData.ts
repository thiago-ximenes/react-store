import axios from 'axios';

export async function getByQuery(query) {
  try {
    const response = await axios.get(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
    return response.data.results;
  } catch(err) {
    console.log(err);
  }
}
