import React, { useCallback, useState } from 'react';

import PhotoListItem from './components/PhotoListItem';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import HomeRoute from "./components/HomeRoute";
import './App.scss';
import topics from './mocks/topics.js';
import photos from './mocks/photos.js';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

const App = () => {
  const [like, setLike] = useState([]);
  const toggleLike = (photoId) => like.includes(photoId) ? setLike(like.filter(e => e !== photoId)) : setLike([...like, photoId]);
  const isLiked = (photoId) => like.includes(photoId);
  const isFavPhotoExist = like.length > 0;
  const [selectedPhoto, setSelectedPhoto] = useState();
  const [modal, setModal] = useState(false);
  const showModal = (photo) => {
    setModal(true);
    setSelectedPhoto(photo);
  };
  const hideModal = () => setModal(false);
  return (
    <div className="App">
      <HomeRoute isFavPhotoExist={isFavPhotoExist} isLiked={isLiked} toggleLike={toggleLike} showModal={showModal} />
      {modal && <PhotoDetailsModal hideModal={hideModal} selectedPhoto={selectedPhoto} isLiked={isLiked} toggleLike={toggleLike} />}
    </div>
  );
};

export default App;
