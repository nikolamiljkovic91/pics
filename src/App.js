import React from 'react';
import Header from './components/Header/Header';
import GridList from './components/Grid/GridList';
import Footer from './components/Footer/Footer';
import List from './components/List/List';
import classes from './App.module.scss';


let App = () => {
  return (
    <div className={classes.Wrapper}>
      <Header />
      <GridList />
      <List />
      <Footer />
    </div>
  )
}

export default App;
