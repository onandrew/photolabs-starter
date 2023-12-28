import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ dark, setDark, isFavPhotoExist }) => {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={!!isFavPhotoExist} selected={true} dark={dark}/>
      <div className='dark-mode' onClick={setDark}>
      </div>
    </div>
  ) 
};

export default FavBadge;