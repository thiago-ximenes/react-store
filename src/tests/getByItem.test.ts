import axios from 'axios';
import { getByItem } from '../services/fetchData';
import data from './__mocks__/getByItemData';

jest.mock('axios');

describe('Should test getByItem fetching function ', () => {
  it('Test if function is called', async () => {
    await getByItem('MLB1803629273');

    expect(axios.get).toHaveBeenCalled();
  });
  it('Test if function was called with right parameter', () => {
    const URL = 'https://api.mercadolibre.com/sites/MLB/search?category=MLB1803629273';

    expect(axios.get).toHaveBeenCalledWith(URL);
  });
  it('Test if function returns an object', async () => {
    (axios.get as jest.Mock).mockImplementationOnce(() => Promise
      .resolve({ data: { results: [] } }));

    const response = await getByItem('MLB1803629273');

    expect(typeof response).toBe('object');
  });
  it('Test if function return the correct data', async () => {
    (axios.get as jest.Mock).mockImplementationOnce(() => Promise
      .resolve({ data: { results: data } }));

    const result = await getByItem('MLB1803629273');

    expect(result).toEqual(data);
  });
});
