import axios from 'axios';

const api = axios.create({
  baseURL: 'http://www.omdbapi.com',
  params: {
    apiKey: '2f3933e4',
    s: '*apple*',
  },
  timeout: 1000,
});

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const getMovies = async (page, year) => {
  await delay(1000);
  
  const response = await api({
    params: {
      page,
      y: year,
    }
  });

  return response.data.Search;
}
