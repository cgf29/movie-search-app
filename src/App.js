import React from 'react';
import { Route, Switch } from 'react-router';

import { SearchPage } from './pages';
import { connect } from 'react-redux';

function App({path, id}) {
   return (
      <div className='App'>
         <Switch>
            <Route path={['/', `/#/&name=${path}`, '/#/movie=:id']} component={SearchPage} />
         </Switch>
      </div>
   );
}

const mapStateToProps = (state) => ({
   path: state.search.inputValue,
   id: state.search.currentMovieId
});

export default connect(mapStateToProps, null)(App);
