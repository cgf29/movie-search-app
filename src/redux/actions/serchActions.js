import axios from 'axios';

import {
   SET_IS_LOADING,
   FETCH_MOVIES,
   FETCH_MOVIE,
   NEXT_PAGE,
   INPUT_VALUE_CHANGE,
   SET_CURRENT_MOVIE_ID,
} from './types';

export const changeInputValue = (text) => ({
   type: INPUT_VALUE_CHANGE,
   payload: text,
});

export const setIsLoading = (bool) => ({
   type: SET_IS_LOADING,
   payload: bool,
});

export const setCurrentMovieId = (id) => ({
   type: SET_CURRENT_MOVIE_ID,
   payload: id,
});

export const fetchMovies = (name) => (dispatch) => {
   dispatch(setIsLoading(true));
   axios
      .get(`https://www.omdbapi.com/?apikey=c951ff1&s=${name}`)
      .then((res) => {
         dispatch({
            type: FETCH_MOVIES,
            payload: res.data,
         });
         dispatch(setIsLoading(false));
      });
};

export const nextPage = (name, currentPage) => (dispatch) => {
   dispatch(setIsLoading(true));
   axios
      .get(
         `https://www.omdbapi.com/?apikey=c951ff1&s=${name}&page=${currentPage}`,
      )
      .then((res) => {
         dispatch(fetchMovies(name))
         dispatch({
            type: NEXT_PAGE,
            payload: { movies: res.data.Search, currentPage },
         });
         dispatch(setIsLoading(false));
      });
};

export const fetchMovie = (id) => (dispatch) => {
   dispatch(setIsLoading(true));
   axios.get(`https://www.omdbapi.com/?apikey=c951ff1&i=${id}&plot=full`).then((res) => {
      dispatch({
         type: FETCH_MOVIE,
         payload: res.data,
      });
      dispatch(setIsLoading(false));
   });
};
