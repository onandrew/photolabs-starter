import React from "react";

import "../styles/HomeRoute.scss";
import TopNavigation from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

const HomeRoute = (props) => {
  const {
    topics, 
    photos, 
    onPhotoClick, 
    favPhotos, 
    addFavPhoto, 
    removeFavPhoto, 
    currentTopic, 
    updateTopic, 
    resetFilters, 
    showFavOnly,
    toggleShowFavOnly, 
  } = props;

  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        favPhotos={favPhotos}
        showFavOnly={showFavOnly}
        currentTopic={currentTopic}
        updateTopic={updateTopic}
        resetFilters={resetFilters}
        toggleShowFavOnly={toggleShowFavOnly}
      />
      <PhotoList
        photos={photos}
        favPhotos={favPhotos}
        addFavPhoto={addFavPhoto}
        removeFavPhoto={removeFavPhoto}
        onPhotoClick={onPhotoClick}
        showFavOnly={showFavOnly}
        currentTopic={currentTopic}
      />
    </div>
  );
};

export default HomeRoute;