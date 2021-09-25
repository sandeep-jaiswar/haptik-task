import {
  ADD_FRIEND,
  DELETE_FRIEND,
  GET_FRIENDS,
  MARK_FAV,
  UNMARK_FAV
} from "../constants/FriendListConstants";

const initialState = {
  friends: []
};

export const friendListReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case GET_FRIENDS:
      return { ...state, friends: payload };
    case DELETE_FRIEND:
      return { ...state };
    case ADD_FRIEND:
      return { ...state, payload };
    case MARK_FAV:
      return { ...state };
    case UNMARK_FAV:
      return { ...state };
    default:
      return { ...state };
  }
};
