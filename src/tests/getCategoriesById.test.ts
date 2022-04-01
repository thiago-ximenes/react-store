import axios from 'axios';
import { getCategoryById } from '../services/fetchData';
import data from './__mocks__/getCategoriesById';

jest.mock('axios');

describe('Should test getCategoriesById fetching function ', () => {
  it('Test if function is called', async () => {
    await getCategoryById('MLB5672');

    expect(axios.get).toHaveBeenCalled();
  });
  it('Test if function was called with right parameter', () => {
    const URL = 'https://api.mercadolibre.com/sites/MLB/search?category=MLB5672';

    expect(axios.get).toHaveBeenCalledWith(URL);
  });
  it('Test if function returns an object', async () => {
    (axios.get as jest.Mock).mockImplementationOnce(() => Promise
      .resolve({ data: { results: [] } }));

    const response = await getCategoryById('MLB5672');

    expect(typeof response).toBe('object');
  });
  it('Test if function return the correct data', async () => {
    (axios.get as jest.Mock).mockImplementationOnce(() => Promise
      .resolve({ data: { results: data } }));

    const result = await getCategoryById('MLB5672');

    expect(result).toEqual(data);
  });
});
