import axios from 'axios';

const api = axios.create({
  baseURL: 'http://www.omdbapi.com',
  params: {
    apiKey: '2f3933e4',
    s: '*apple*',
  },
  timeout: 1000,
});
const fakeTimeout = 1000;

export const getMovies = async (page, year) => {
  const response = await api({
    params: {
      page,
      y: year,
    }
  });

  return response.data.Search;
}
