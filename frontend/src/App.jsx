import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import { useApplicationData } from 'hooks/useApplicationData';

const App = () => {
  const {
    state: { likes, selectedPhoto, modal, photoData, topicData, dark },
    updateToFavPhotoIds,
    setPhotoSelected,
    getPhotosByTopic,
    getAllPhotos,
    onClosePhotoDetailsModal,
    setDark
  } = useApplicationData();

  const isLiked = photoId => likes.includes(photoId);
  const isFavPhotoExist = likes.length > 0;

  return (
    <div className={`App ${dark}`}>
      <HomeRoute
        isFavPhotoExist={isFavPhotoExist}
        isLiked={isLiked}
        toggleLike={updateToFavPhotoIds}
        photos={photoData}
        topics={topicData}
        getPhotosByTopic={getPhotosByTopic}
        getAllPhotos={getAllPhotos}
        showModal={setPhotoSelected}
        dark={dark}
        setDark={setDark}
      />
      {modal &&
        <PhotoDetailsModal
          showModal={setPhotoSelected}
          hideModal={onClosePhotoDetailsModal}
          selectedPhoto={selectedPhoto}
          isLiked={isLiked}
          toggleLike={updateToFavPhotoIds}
          dark={dark}
        />}
    </div>
  );
};

export default App;
