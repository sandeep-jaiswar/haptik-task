import { GET_FRIENDS } from "../constants/FriendListConstants";

const initialState = {
  friends: []
};

export const friendListReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case GET_FRIENDS:
      return { ...state, friends: payload };
    default:
      return { ...state };
  }
};
