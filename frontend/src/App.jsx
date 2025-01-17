import React, { useState } from "react";

import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";

import { useApplicationData } from "./hooks/useApplicationData";

import "./App.scss";
const App = () => {
  const {
    showModal,
    clickedPhoto,
    favPhotos,
    handlePhotoClick,
    closeModal,
    addFavPhoto,
    removeFavPhoto,
    topicsData,
    photosData,
    currentTopic,
    updateTopic,
    resetFilters,
    showFavOnly,
    toggleShowFavOnly,
    
  } = useApplicationData();
  return (
    <div className="App">
      <HomeRoute
        topics={topicsData}
        photos={photosData}
        onPhotoClick={handlePhotoClick}
        favPhotos={favPhotos}
        addFavPhoto={addFavPhoto}
        removeFavPhoto={removeFavPhoto}
        currentTopic={currentTopic}
        updateTopic={updateTopic}
        resetFilters={resetFilters}
        showFavOnly={showFavOnly}
        toggleShowFavOnly={toggleShowFavOnly}
      />
      {showModal && (
        <PhotoDetailsModal
          clickedPhoto={clickedPhoto}
          onClose={closeModal}
          photos={photosData}
          favPhotos={favPhotos}
          addFavPhoto={addFavPhoto}
          removeFavPhoto={removeFavPhoto}
        />
      )}
    </div>
  );
};

export default App;