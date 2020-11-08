import {
   SET_IS_LOADING,
   FETCH_MOVIES,
   NEXT_PAGE,
   INPUT_VALUE_CHANGE,
   SET_CURRENT_MOVIE_ID,
   FETCH_MOVIE,
} from '../actions/types';

const newMovieId = (path) => {
   const splitedPath = path.split('');
   const movieId = [];
   for (let i = 9; i > 0; i--) {
      movieId.push(splitedPath[splitedPath.length - i]);
   }
   return movieId.join('');
};

const newInputValue = (path) => {
   const splitedPath = path.split('');
   const inputValue = [];
   for (let i = 8; i < path.length; i++) {
      inputValue.push(splitedPath[i]);
   }
   return inputValue.join('');
};

const initialState = {
   inputValue: window.location.hash.length !== 17
   ? newInputValue(window.location.hash)
   : '',
   isLoading: false,
   movies: [],
   totalResults: 0,
   currentPage: 1,
   currentMovieId:  window.location.hash.length === 17
   ? newMovieId(window.location.hash)
   : '',
   movie: {
      title: '',
      year: '',
      runtime: '',
      genre: '',
      released: '',
      actors: '',
      plot: '',
      country: '',
      awards: '',
      poster: '',
      raitings: [],
      imdbRaiting: '',
      imdbVotes: '',
   },
};

export const searchReducer = (state = initialState, { type, payload }) => {
   switch (type) {
      case INPUT_VALUE_CHANGE:
         return {
            ...state,
            inputValue: payload,
         };
      case SET_IS_LOADING:
         return {
            ...state,
            isLoading: payload,
         };
      case SET_CURRENT_MOVIE_ID:
         return {
            ...state,
            currentMovieId: payload,
         };
      case FETCH_MOVIES:
         return {
            ...state,
            totalResults: payload.totalResults,
         };
      case NEXT_PAGE:
         return {
            ...state,
            movies: payload.movies,
            currentPage: payload.currentPage,
         };
      case FETCH_MOVIE:
         return {
            ...state,
            movie: {
               title: payload.Title,
               year: payload.Year,
               runtime: payload.Runtime,
               genre: payload.Genre,
               released: payload.Released,
               actors: payload.Actors,
               plot: payload.Plot,
               country: payload.Country,
               awards: payload.Awards,
               poster: payload.Poster,
               raitings: payload.Ratings,
               imdbRaiting: payload.imdbRaiting,
               imdbVotes: payload.imdbVotes,
            },
         };
      default:
         return state;
   }
};
