import axios from 'axios';

// config
import config from '../config';

const request = axios.create({
  timeout: config.timeOut,
  baseURL: config.movieDB.baseAPI,
  headers: { 'Content-Type': 'application/json' }
});

request.interceptors.request.use(requestConfig => {
  requestConfig.params = {
    ...requestConfig.params,
    api_key: config.movieDB.apiKey,
  };
  return requestConfig;
});

const movieDBService = {
  searchMovies: ({ query, page = 1 }) => {
    return new Promise((resolve, reject) => {
      request
        .get('/search/movie', {
          params: { page, query }
        })
        .then(({ data }) => {
          resolve(data);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  discoverMovies: ({ query, page = 1 }) => {
    return new Promise((resolve, reject) => {
      request
        .get('/discover/movie', {
          params: { page, ...query }
        })
        .then(({ data }) => {
          resolve(data);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  getMovieDetails: ({ id }) => {
    return new Promise((resolve, reject) => {
      request
        .get(`/movie/${id}`)
        .then(({ data }) => {
          resolve(data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
};

export default movieDBService;
