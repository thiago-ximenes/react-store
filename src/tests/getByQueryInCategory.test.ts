import axios from 'axios';
import { getByQueryInCategory } from '../services/fetchData';
import data from './__mocks__/getByQueryInCategory';

jest.mock('axios');

describe('Should test getByQueryInCategory fetching function ', () => {
  it('Test if function is called', async () => {
    await getByQueryInCategory('MLB5672', 'pneu');

    expect(axios.get).toHaveBeenCalled();
  });
  it('Test if function was called with right parameter', () => {
    const URL = 'https://api.mercadolibre.com/sites/MLB/search?category=MLB5672&q=pneu';

    expect(axios.get).toHaveBeenCalledWith(URL);
  });
  it('Test if function returns an object', async () => {
    (axios.get as jest.Mock).mockImplementationOnce(() => Promise
      .resolve({ data: { results: [] } }));

    const response = await getByQueryInCategory('MLB5672', 'pneu');

    expect(typeof response).toBe('object');
  });
  it('Test if function return the correct data', async () => {
    (axios.get as jest.Mock).mockImplementationOnce(() => Promise
      .resolve({ data: { results: data } }));

    const result = await getByQueryInCategory('MLB5672', 'pneu');

    expect(result).toEqual(data);
  });
});
