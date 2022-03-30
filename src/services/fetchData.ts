import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export async function getByQuery(query : string): Promise<object> {
  try {
    const response = await axios.get(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);

    return response.data.results;
  } catch (err) {
    return { err };
  }
}
