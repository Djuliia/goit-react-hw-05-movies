import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'cb0acd0bbde3e970a3d7b37a44552220';

export async function fetchTrendingMovies() {
  const response = await axios.get(
    `${BASE_URL}trending/all/day?language=en-US&api_key=${API_KEY}`
  );
  return await response.data;
}

export async function fetchMovieDetails(movieId) {
  const response = await axios.get(
    `${BASE_URL}movie/${movieId}?language=en-US&api_key=${API_KEY}`
  );
  return await response.data;
}