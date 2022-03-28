import axios from 'axios';
import { getByQuery } from '../services/fetchData';

jest.mock('axios');

describe('Should test getByQuery fetching function ', () => {
  it('Test if function is called', () => {
    getByQuery('computador');

    expect(axios.get).toHaveBeenCalled();
  });
});
