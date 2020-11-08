import React, { useEffect, useRef } from 'react';
import { nextPage } from '../../redux/actions/serchActions';
import { connect } from 'react-redux';

import loadingGif from '../../components/5.gif';
import { Card, Pagination } from '../../components';
import './MoviesList.scss';

const MoviesList = ({
   name,
   movies,
   nextPage,
   totalResults,
   isLoading,
   currentPage,
}) => {
   const mounted = useRef();
   useEffect(() => {
      if (!mounted.current) {
         mounted.current = true;
      } else {
         window.scrollTo(0, 0);
      }
   });

   useEffect(() => {
      nextPage(name, currentPage);
   }, []);

   const pages = Math.ceil(parseInt(totalResults) / 10);

   return (
      <div className='movies'>
         {isLoading ? (
            <div className='movies__loading-screen'>
               <img src={loadingGif} alt='loading' />
            </div>
         ) : (
            <div className='movies__list'>
               {movies
                  ? movies.map((movie) => (
                     <Card
                        key={movie.imdbID}
                        title={movie.Title}
                        id={movie.imdbID}
                        year={movie.Year}
                        img={movie.Poster}
                     />
                    ))
                  : 'nothing'}
            </div>
         )}
         <div className='movies__pagination'>
            {totalResults > 10 && !isLoading ? <Pagination pages={pages} /> : ''}
         </div>
         
      </div>
   );
};

const mapStateToProps = (state) => ({
   totalResults: state.search.totalResults,
   movies: state.search.movies,
   name: state.search.inputValue,
   isLoading: state.search.isLoading,
   currentPage: state.search.currentPage,
});

export default connect(mapStateToProps, { nextPage })(MoviesList);
