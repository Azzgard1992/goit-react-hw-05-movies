import axios from 'axios';

const MY_KEY = 'b49485b850e1a5911c943abe3524caa9';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${MY_KEY}`);
  return response.data;
};

export const getMovieInfoById = async id => {
  const response = await axios.get(`/movie/${id}?api_key=${MY_KEY}`);
  return response.data;
};

export const getMoviesByQuery = async query => {
  const response = await axios.get(
    `search/movie?api_key=${MY_KEY}&query=${query}&page=1`
  );
  return response.data;
};

export const getCastInfoById = async id => {
  const response = await axios.get(`/movie/${id}/credits?api_key=${MY_KEY}`);
  return response.data;
};

export const getReviewsInfoById = async id => {
  const response = await axios.get(`/movie/${id}/reviews?api_key=${MY_KEY}`);
  return response.data;
};
