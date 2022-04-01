import axios from 'axios';
import { getCategories } from '../services/fetchData';
import data from './__mocks__/getCategoriesData';

jest.mock('axios');

describe('Should test getCategories fetching function ', () => {
  it('Test if function is called', async () => {
    await getCategories();

    expect(axios.get).toHaveBeenCalled();
  });
  it('Test if function returns an object', async () => {
    (axios.get as jest.Mock).mockImplementationOnce(() => Promise
      .resolve({ data: { results: [] } }));

    const response = await getCategories();

    expect(typeof response).toBe('object');
  });
  it('Test if function return the correct data', async () => {
    (axios.get as jest.Mock).mockImplementationOnce(() => Promise
      .resolve({ data }));

    const result = await getCategories();

    expect(result).toEqual(data);
  });
});
