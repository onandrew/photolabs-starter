import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [like, setLike] = useState('');
  return (
    <div className="photo-list__fav-icon" onClick={() => setLike('true')}>
      <div className="photo-list__fav-icon-svg">
      <FavIcon selected={like}></FavIcon>
      </div>
    </div>
  );
}

export default PhotoFavButton;