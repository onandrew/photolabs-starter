import React from "react";
import { FavIcon } from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton(props) {
  const { isFav, onFavClick, onUnFavClick } = props;
  const fill = isFav ? "#C80000" : "#EEEEEE";
  function handleClick() {
    if (isFav) {
      onUnFavClick();
    } else {
      onFavClick();
    }
  }
  return (
    <div className="photo-list--fav-icon" onClick={handleClick}>
      <div className="photo-list--fav-icon-svg">
        <FavIcon fill={fill} />
      </div>
    </div>
  );
}

export default PhotoFavButton;