import React from 'react';
import { connect } from 'react-redux';

import './Input.scss';
import { changeInputValue } from '../../redux/actions/serchActions';

const Input = ({ fetchMovies, inputValue, state, changeInputValue }) => {
   return (
      <div className='input'>
         <input
            type='text'
            onChange={(e) => changeInputValue(e.target.value)}
            value={inputValue}
         />
      </div>
   );
};

const mapStateToProps = (state) => ({
   inputValue: state.search.inputValue,
});

export default connect(mapStateToProps, { changeInputValue })(Input);
