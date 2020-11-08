import React from 'react';
import { connect } from 'react-redux';

import './Card.scss';
import { LinkButton } from '../';
import { setCurrentMovieId } from '../../redux/actions/serchActions';

const Card = ({ title, img, id, year, setCurrentMovieId }) => {
   return (
      <div className='card'>
         <div className='card__img'>
            {img === 'N/A' ? (
               <img
                  src='https://www.teknozeka.com/wp-content/uploads/2020/03/wp-header-logo-21.png'
                  alt='Image'
               />
            ) : (
               <img src={img} alt='No image' />
            )}
         </div>
         <div className='card__title'>
            <h3>{title}</h3>
         </div>
         <div className='card__year'>
            <h4>{year}</h4>
         </div>
         <div className='link__btn' onClick={() => setCurrentMovieId(id)}>
            <LinkButton to={`/movie=${id}`} title='More info' />
         </div>
      </div>
   );
};

export default connect(null, { setCurrentMovieId })(Card);
