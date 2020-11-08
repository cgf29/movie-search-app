import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchMovie } from '../../redux/actions/serchActions';
import loadingGif from '../../components/5.gif';
import './MovieInfo.scss';
import { TableItem, LinkButton } from '../../components';

const MovieInfo = ({
   to,
   fetchMovie,
   id,
   isLoading,
   title,
   year,
   runtime,
   genre,
   released,
   actors,
   plot,
   country,
   awards,
   poster,
   raitings,
   imdbRaiting,
   imdbVotes,
}) => {
   useEffect(() => {
      fetchMovie(id);
   }, []);

   return (
      <div className='movie'>
         {isLoading ? (
            <div className='movie__loading-screen'>
               <img src={loadingGif} alt='loading' />
            </div>
         ) : (
            <div className='movie'>
               <div className='movie__info'>
                  <div className='movie__poster'>
                     {poster === 'N/A' ? (
                        <img
                           src='https://www.teknozeka.com/wp-content/uploads/2020/03/wp-header-logo-21.png'
                           alt='Image'
                        />
                     ) : (
                        <img src={poster} alt='No image' />
                     )}
                  </div>
                  <div className='movie__details'>
                     <div className='movie__title'>
                        <span>{title}</span>
                        <LinkButton to={to ? `/&name=${to}` : '/'} title='Go back' />
                     </div>
                     <div className='movie__main-details'>
                        <div className='movie__top-details'>
                           {genre} / {runtime} / {year}
                        </div>
                        <div className='movie__table-details'>
                           {released && (
                              <TableItem title='Released' value={released} />
                           )}
                           {country && (
                              <TableItem title='Country' value={country} />
                           )}
                           {actors && (
                              <TableItem title='Actors' value={actors} />
                           )}
                           {awards && (
                              <TableItem title='Awards' value={awards} />
                           )}
                           {imdbRaiting && (
                              <TableItem
                                 title='imdbRaiting'
                                 value={imdbRaiting}
                              />
                           )}
                           {imdbVotes && (
                              <TableItem title='imdbVotes' value={imdbVotes} />
                           )}
                           {raitings.map((raiting) => (
                              <TableItem
                                 key={raiting.Source}
                                 title={`Raiting: ${raiting.Source}`}
                                 value={raiting.Value}
                              />
                           ))}
                        </div>
                     </div>
                     <div className='movie__story'>Story: {plot}</div>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
};

const mapStateToProps = (state) => ({
   to: state.search.inputValue,
   id: state.search.currentMovieId,
   isLoading: state.search.isLoading,
   title: state.search.movie.title,
   poster: state.search.movie.poster,
   year: state.search.movie.year,
   runtime: state.search.movie.runtime,
   genre: state.search.movie.genre,
   released: state.search.movie.released,
   country: state.search.movie.country,
   actors: state.search.movie.actors,
   awards: state.search.movie.awards,
   imdbRaitingawards: state.search.movie.imdbRaitingawards,
   imdbVotes: state.search.movie.imdbVotes,
   raitings: state.search.movie.raitings,
   plot: state.search.movie.plot,
});

export default connect(mapStateToProps, { fetchMovie })(MovieInfo);
