import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

export const FavBadge = (props) => {
  const { favPhotos, onClick } = props;
  const isFavPhotoExist = (object) => {
    return Object.keys(object).length > 0;
  };

  return (
    <div className="fav-badge">
      <FavIcon
        width={20}
        height={17}
        fill="#C80000"
        displayAlert={!!isFavPhotoExist(favPhotos)}
        onClick={onClick}
      />
    </div>
  );
};

export default FavBadge;