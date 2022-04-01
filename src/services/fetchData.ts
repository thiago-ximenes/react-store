import axios from 'axios';

export async function getByQuery(query : string): Promise<object> {
  try {
    const response = await axios.get(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);

    return response.data.results;
  } catch (err) {
    return { err };
  }
}

export async function getCategories(): Promise<object> {
  try {
    const response = await axios.get('https://api.mercadolibre.com/sites/MLB/categories');

    return response.data;
  } catch (err) {
    return { err };
  }
}

export async function getCategoryById(id: string): Promise<object> {
  try {
    const response = await axios.get(`https://api.mercadolibre.com/sites/MLB/search?category=${id}`);

    return response.data.results;
  } catch (err) {
    return { err };
  }
}

export async function getByQueryInCategory(
  category: string,
  query: string,
): Promise<object> {
  try {
    const response = await axios.get(`https://api.mercadolibre.com/sites/MLB/search?category=${category}&q=${query}`);

    return response.data.results;
  } catch (err) {
    return { err };
  }
}

export async function getByItem(id: string): Promise<object> {
  try {
    const response = await axios.get(`https://api.mercadolibre.com/items/${id}`);

    return response.data.results;
  } catch (err) {
    return { err };
  }
}
