import React, { useCallback, useState } from 'react';
import "../styles/HomeRoute.scss";
import TopNavigationBar from "./TopNavigationBar";
import PhotoList from "./PhotoList";
import photos from "../mocks/photos";
import topics from "../mocks/topics";

const HomeRoute = (props) => {
  const [like, setLike] = useState([]);
  const toggleLike = (id) => like.includes(id) ? setLike(like.filter(e => e !== id)) : setLike([...like, id]);
  const {topics, photos} = props;
  return (
  <div className="home-route">
    <TopNavigationBar topics={topics}/>
    <PhotoList like={like} toggleLike={toggleLike} photos={photos} />
  </div>
  );
}

export default HomeRoute;
