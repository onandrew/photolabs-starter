import React from 'react';
import "../styles/HomeRoute.scss";
import TopNavigationBar from "./TopNavigationBar";
import PhotoList from 'components/PhotoList';
import photos from "../mocks/photos";


const HomeRoute = ({ isFavPhotoExist, isLiked, toggleLike, showModal }) => {
  const [like, setLike] = useState([]);
  const toggleLike = (photoId) => like.includes(photoId) ? setLike(like.filter(e => e !== photoId)) : setLike([...like, photoId]);
  const isLiked = (photoId) => like.includes(photoId);
  const isFavPhotoExist = like.length > 0;
  const [selectedPhoto, setSelectedPhoto] = useState();
  const [modal, setModal] = useState(false);
  const showModal = (photo) => {
    setModal(true);
    setSelectedPhoto(photo);
  };
  const hideModal = () => setModal(false);
  return (
    <div className="home-route">
      <TopNavigationBar isFavPhotoExist={isFavPhotoExist}/>
      <PhotoList isLiked={isLiked} toggleLike={toggleLike} photos={photos} showModal={showModal}/>
    </div>
  );
};

export default HomeRoute;
