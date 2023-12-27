import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import '../styles/PhotoListItem.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = ({ isLiked, toggleLike, hideModal, selectedPhoto }) => {
  const { id, urls, user, location, similar_photos } = selectedPhoto;
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={hideModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className="photo-details-modal__images">
        <PhotoFavButton isLiked={isLiked} toggleLike={toggleLike} photoId={id}></PhotoFavButton>
        <img className="photo-details-modal__image" src={urls.regular} alt="Image"></img>
        <div className="photo-details-modal__photographer-details">
          <img className="photo-list__user-profile" src={user.profile} alt={`Profile Image for ${user.username}`}></img>
          <div className="photo-list__user-info">
            <span>{user.name}</span>
            <div className="photo-list__user-location">
              {location.city}, {location.country}
            </div>
          </div>
        </div>
        <p className='photo-details-modal__header'>Similar Photos</p>
      </div>
      <div className='photo-details-modal__top-bar'>
        <PhotoList isLiked={isLiked} toggleLike={toggleLike} photos={similar_photos}/>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
