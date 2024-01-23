import { useReducer, useEffect } from "react";
import { reducer, ACTIONS } from "../reducer/reducer";

export const useApplicationData = () => {
  const initialState = {
    showModal: false,
    clickedPhoto: null,
    favPhotos: {},
    topicsData: [],
    photosData: [],
    currentTopic: undefined,
    showFavOnly: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let url = "/api/photos";

    if (state.currentTopic !== undefined) {
      url = `url =/api/topics/photos/${state.currentTopic}`;
    }

    fetch("/api/topics")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: ACTIONS.SET_TOPICS, payload: data });
      })
      .catch((error) => {
        console.error("Error fetching topics:", error);
      });

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: ACTIONS.SET_PHOTOS, payload: data });
      })
      .catch((error) => {
        console.error("Error fetching photos:", error);
      });
  }, [state.currentTopic]);

  const handlePhotoClick = (photoProps) => {
    dispatch({ type: ACTIONS.SET_CLICKED_PHOTO, payload: photoProps });
    dispatch({ type: ACTIONS.SHOW_MODAL });
  };

  const closeModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  };

  const addFavPhoto = (photoId) => {
    dispatch({ type: ACTIONS.ADD_FAV_PHOTO, payload: photoId });
  };

  const removeFavPhoto = (photoId) => {
    dispatch({ type: ACTIONS.REMOVE_FAV_PHOTO, payload: photoId });
  };

  const updateTopic = (topicId) => {
    dispatch({ type: ACTIONS.SET_TOPIC, payload: topicId });
  };

  const resetFilters = () => {
    dispatch({ type: ACTIONS.SET_TOPIC, payload: undefined });
    dispatch({ type: ACTIONS.TOGGLE_SHOW_FAV_ONLY, payload: false });
  };

  const toggleShowFavOnly = () => {
    dispatch({ type: ACTIONS.TOGGLE_SHOW_FAV_ONLY, payload: !state.showFavOnly });
  };

  return {
    ...state,
    handlePhotoClick,
    closeModal,
    addFavPhoto,
    removeFavPhoto,
    updateTopic,
    resetFilters,
    toggleShowFavOnly,
  };
};