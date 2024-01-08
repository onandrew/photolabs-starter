export const ACTIONS = {
  SHOW_MODAL: "SHOW_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
  SET_CLICKED_PHOTO: "SET_CLICKED_PHOTO",
  ADD_FAV_PHOTO: "ADD_FAV_PHOTO",
  REMOVE_FAV_PHOTO: "REMOVE_FAV_PHOTO",
  SET_TOPICS: "SET_TOPICS",
  SET_PHOTOS: "SET_PHOTOS",
  SET_TOPIC: "SET_TOPIC",
  TOGGLE_SHOW_FAV_ONLY: "TOGGLE_SHOW_FAV_ONLY",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SHOW_MODAL:
      return { ...state, showModal: true };
    case ACTIONS.CLOSE_MODAL:
      return { ...state, showModal: false, clickedPhoto: null };

    case ACTIONS.SET_CLICKED_PHOTO:
      return { ...state, clickedPhoto: action.payload };

    case ACTIONS.ADD_FAV_PHOTO:
      return {
        ...state,
        favPhotos: { ...state.favPhotos, [action.payload]: true },
      };

    case ACTIONS.REMOVE_FAV_PHOTO:
      let updatedFavPhotos = { ...state.favPhotos };
      delete updatedFavPhotos[action.payload];
      return { ...state, favPhotos: updatedFavPhotos };
    case ACTIONS.SET_TOPICS:
      return { ...state, topicsData: action.payload };
    case ACTIONS.SET_PHOTOS:
      return { ...state, photosData: action.payload };
    case ACTIONS.SET_TOPIC:
      return { ...state, currentTopic: action.payload };

    case ACTIONS.TOGGLE_SHOW_FAV_ONLY:
      return { ...state, showFavOnly: action.payload };
    default:
      throw new Error();
  }
};