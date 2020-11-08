import React from 'react';
import { Route } from 'react-router';
import { connect } from 'react-redux';

import { SearchForm, MovieInfo } from '../../modules';

const SearchPage = ({path, id}) => {
   return (
      <div> 
         <Route exact path={['/', `/&name=:name`]} component={SearchForm} />
         <Route exact path='/movie=:id' component={MovieInfo} />
      </div>
   );
};

const mapStateToProps = (state) => ({
   path: state.search.inputValue,
   id: state.search.currentMovieId
});

export default connect(mapStateToProps, null)(SearchPage);
