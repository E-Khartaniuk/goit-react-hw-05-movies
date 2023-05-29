import axios from 'axios';
const API = '6586f18679356ff078f894039b823aea';

export function getTrendMovieData() {
  const response = axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${API}`
  );
  return response;
}

export function getMovieDataById(movieId) {
  const response = axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API}`
  );
  return response;
}

export function getMovieDataByRequest(query) {
  const response = axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API}&query=${query}`
  );
  console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', response);
  return response;
}

export function getMovieCast(movieId) {
  const response = axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API}`
  );

  return response;
}

export function getMovieReviews(movieId) {
  const response = axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API}`
  );

  return response;
}

export default {
  getTrendMovieData,
  getMovieDataById,
  getMovieDataByRequest,
  getMovieCast,
  getMovieReviews,
};
