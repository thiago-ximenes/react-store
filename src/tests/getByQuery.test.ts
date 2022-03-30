import axios from 'axios';
import { getByQuery } from '../services/fetchData';
import data from './__mocks__/getByQueryData';

jest.mock('axios');

describe('Should test getByQuery fetching function ', () => {
  it('Test if function is called', async () => {
    await getByQuery('computador');

    expect(axios.get).toHaveBeenCalled();
  });
  it('Test if function was called with right parameter', () => {
    const URL = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';

    expect(axios.get).toHaveBeenCalledWith(URL);
  });
  it('Test if function returns an object', async () => {
    (axios.get as jest.Mock).mockImplementationOnce(() => Promise
      .resolve({ data: { results: [] } }));

    const response = await getByQuery('computador');

    expect(typeof response).toBe('object');
  });
  it('Test if function return the correct data', async () => {
    (axios.get as jest.Mock).mockImplementationOnce(() => Promise
      .resolve({ data: { results: data } }));

    const result = await getByQuery('computador');

    expect(result).toEqual(data);
  });
});
