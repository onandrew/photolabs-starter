import React, { useCallback, useState } from 'react';
import "../styles/HomeRoute.scss";
import TopNavigationBar from "./TopNavigationBar";
import PhotoList from "./PhotoList";
import photos from "../mocks/photos";


const HomeRoute = (props) => {
  const [like, setLike] = useState([]);
  const toggleLike = (id) => like.includes(id) ? setLike(like.filter(e => e !== id)) : setLike([...like, id]);
  const isLiked = (photoId) => like.includes(photoId);
  const [modal, setModal] = useState(false);
  const showModal = () => setModal(true);
  const hideModal = () => setModal(false);
  const isFavPhotoExist = like.length > 0;
  const {photos} = props;
  return (
  <div className="home-route">
    <TopNavigationBar isFavPhotoExist={isFavPhotoExist}/>
    <PhotoList isLiked={isLiked} toggleLike={toggleLike} photos={photos} />
    {modal && <PhotoDetailsModal hideModal={hideModal}/>}
  </div>
  );
}

export default HomeRoute;
