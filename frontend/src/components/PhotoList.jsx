import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";


const PhotoList = (props) => {
  const {
    photos,
    favPhotos,
    showFavOnly,
    addFavPhoto,
    removeFavPhoto,
    onPhotoClick,
  } = props;
  let photosToDisplay;
  if (Array.isArray(photos)) {
    const filteredPhotos = photos.filter(
      (photo) => !showFavOnly || favPhotos[photo.id]
    );
    filteredPhotos.length === 0  && showFavOnly === true
      ? 
        (photosToDisplay = (
          <div className="photo-list-empty">
            <p className="photo-list-empty-text">
              Oh no!
            </p>
            <p className="photo-list-empty-text">You have no favourites here yet ...</p>
            <p className="photo-list-empty-attrib">Image by rawpixel.com</p>
          </div>
        ))
      : 
        (photosToDisplay = filteredPhotos.map((photo) => {
          return (
            <PhotoListItem
              id={photo.id}
              key={photo.id}
              username={photo.user.username}
              imageSource={photo.urls.regular}
              description={photo.description}
              avatar={photo.user.profile}
              city={photo.location.city}
              country={photo.location.country}
              isFav={favPhotos[photo.id]}
              onFavClick={() => addFavPhoto(photo.id)}
              onUnFavClick={() => removeFavPhoto(photo.id)}
              onPhotoClick={onPhotoClick}
            />
          );
        }));
  }

  return <ul className="photo-list">{props.children || photosToDisplay}</ul>;
};
export default PhotoList;