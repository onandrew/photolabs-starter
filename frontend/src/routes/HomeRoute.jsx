import React from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ getAllPhotos, isFavPhotoExist, isLiked, toggleLike, photos, topics, getPhotosByTopic, showModal, dark, setDark }) => {
  return (
    <div className="home-route">
      <TopNavigationBar getAllPhotos={getAllPhotos} isFavPhotoExist={isFavPhotoExist} topics={topics} getPhotosByTopic={getPhotosByTopic} dark={dark} setDark={setDark}/>
      <PhotoList isLiked={isLiked} toggleLike={toggleLike} photos={photos} showModal={showModal} dark={dark}/>
    </div>
  );
};

export default HomeRoute;