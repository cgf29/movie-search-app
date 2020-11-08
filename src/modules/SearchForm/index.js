import React from 'react';
import { Route } from 'react-router';
import { connect } from 'react-redux';

import { Input, LinkButton } from '../../components';
import { MoviesList } from '../';
import './SearchForm.scss';

const SearchForm = ({ path }) => {
   return (
      <div className='form'>
         <Input />
         <br/>
         <LinkButton to={`/&name=${path}`} title='Search' />
         <Route path={`/&name=${path}`} component={MoviesList} />
      </div>
   );
};

const mapStateToProps = (state) => ({
   path: state.search.inputValue,
});

export default connect(mapStateToProps)(SearchForm);
