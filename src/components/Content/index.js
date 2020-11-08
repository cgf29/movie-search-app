import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import { Card, Pagination } from '../index';
import { fetchMovies } from '../../redux/actions/serchActions';

const Content = ({ movies, totalResults, fetchMovies }) => {
   const mounted = useRef();
   useEffect(() => {
      if (!mounted.current) {
         mounted.current = true;
      } else {
         window.scrollTo({
            top: 0,
            behavior: 'smooth',
         });
      }
   });

   const numberPages = Math.floor(totalResults / 20);

   return (
      <div>
         <ul>
            {movies
               ? movies.map((movie) => (
                    <Card
                       img={movie.Poster}
                       title={movie.Title}
                       id={movie.imdbID}
                       year={movie.Year}
                    />
                 ))
               : 'nothing'}
         </ul>
         {numberPages > 10 ? <Pagination pages={numberPages} /> : ''}
      </div>
   );
};

const mapStateToProps = (state) => ({
   movies: state.search.movies,
   totalResults: state.search.totalResults,
   state: state,
});

export default connect(mapStateToProps, { fetchMovies })(Content);
