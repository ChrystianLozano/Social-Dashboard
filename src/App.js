import React, {Fragment} from 'react';
import './globals.css';

import Header from './Header'
import TopCardList from './TopCardList'
import Overview from './Overview'

function App() {
  return (
    <Fragment>
      <Header />
      <TopCardList />
      <Overview />
    </Fragment>


  );
}

export default App;
