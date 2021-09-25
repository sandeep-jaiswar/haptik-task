import { firestore } from "../../config/firebaseConfig";
import {
  ADD_FRIEND,
  DELETE_FRIEND,
  GET_FRIENDS,
  MARK_FAV,
  UNMARK_FAV
} from "../constants/FriendListConstants";

export const getFriends = () => {
  return async (dispatch) => {
    try {
      const ref = firestore.collection("friends");
      const snapshot = await ref.get();
      let friends = [];
      snapshot.forEach((doc) => {
        friends.push(doc.data());
      });
      dispatch({
        type: GET_FRIENDS,
        payload: friends
      });
    } catch (e) {
      console.log(e, "e");
    }
  };
};

export const deleteFriend = (input) => {
  return {
    type: DELETE_FRIEND,
    payload: input
  };
};

export const addFriend = (input) => {
  return async (dispatch) => {
    try {
      firestore.collection("friends").add(input);
      dispatch({
        type: ADD_FRIEND,
        payload: input
      });
    } catch (e) {
      console.log(e, "e");
    }
  };
};

export const markFavourite = (input) => {
  return {
    type: MARK_FAV,
    payload: input
  };
};

export const unmarkFavourite = (input) => {
  return {
    type: UNMARK_FAV,
    payload: input
  };
};
