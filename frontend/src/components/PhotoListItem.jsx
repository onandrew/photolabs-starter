import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = (props) => {
  const { like, toggleLike, photoId } = props;  
  const { urls, user, location } = props.data;
  return (
    <div className="photo-list-item">
     <PhotoFavButton like={like} toggleLike={toggleLike} photoId={photoId}></PhotoFavButton>
      <img src={imageSource} alt={`Photo by ${username}`} />
      <div className="photo-details">
        <p>
          <strong>Photographer:</strong> {username}
        </p>
        <p>
          <strong>Location:</strong> {location}
        </p>
        <p>
          <strong>ID:</strong> {id}
        </p>
      </div>
      <div className="profile-picture">
        <img src={profile} alt={`Profile of ${username}`} />
      </div>
    </div>
  );
};

export default PhotoListItem;
