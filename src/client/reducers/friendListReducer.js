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
      let newState = state.friends.filter((obj) => obj.id !== payload);
      return { ...state, friends: newState };
    case ADD_FRIEND:
      return { ...state, friends: [...state.friends, payload] };
    default:
      return { ...state };
  }
};
