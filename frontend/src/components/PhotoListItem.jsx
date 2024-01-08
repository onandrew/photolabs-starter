import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const {
    imageSource,
    username,
    id,
    description,
    avatar,
    city,
    country,
    isFav,
    onFavClick,
    onUnFavClick,
    onPhotoClick,
    isClickable = true, 
  } = props;

  return (
    <div className="photo-list--item">
      <PhotoFavButton
        isFav={isFav} 
        onFavClick={onFavClick} 
        onUnFavClick={onUnFavClick}
      />
      <img
        id={id}
        src={imageSource}
        alt={description}
        className="photo-list--image"
        onClick={() => isClickable && onPhotoClick(props)}
      />
      <div className="photo-list--details--parent">
        <img src={avatar} className="photo-list--user-profile" />
        <div className="photo-list--user-details">
          <p className="photo-list--user-info">{username}</p>
          <p className="photo-list--user-location">
            {city}, {country}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;