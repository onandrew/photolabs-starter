import React from 'react';
import "../styles/HomeRoute.scss";
import TopNavigationBar from "./TopNavigationBar";
import PhotoList from 'components/PhotoList';
import photos from "../mocks/photos";


const HomeRoute = ({ isFavPhotoExist, isLiked, toggleLike, showModal }) => {
  return (
    <div className="home-route">
      <TopNavigationBar isFavPhotoExist={isFavPhotoExist}/>
      <PhotoList isLiked={isLiked} toggleLike={toggleLike} photos={photos} showModal={showModal}/>
    </div>
  );
};

export default HomeRoute;
