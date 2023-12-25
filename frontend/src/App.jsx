import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import HomeRoute from "./components/HomeRoute";
import './App.scss';
import topics from './mocks/topics.js';
import photos from './mocks/photos.js';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      <TopNavigationBar />
      <PhotoList />
      <HomeRoute topics={topics} photos={photos}/>
    </div>
  );
};

export default App;
