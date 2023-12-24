import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const [like, toggleLike, photoId ] = props;
  return (
    <div className="photo-list__fav-icon" onClick={() => toggleLike(photoId)}>
      <div className="photo-list__fav-icon-svg">
      <FavIcon selected={like.includes(photoId)}></FavIcon>
      </div>
    </div>
  );
}

export default PhotoFavButton;