import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import HomeRoute from "./components/HomeRoute";
import './App.scss';


// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      <TopNavigationBar />
      <PhotoList />
      <HomeRoute />
    </div>
  );
};

export default App;
