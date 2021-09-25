import { useEffect, useRef } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { addFriend, getFriends } from "../../actions/friendListActions";
import Card from "../../components/card/Card";
import Divider from "../../components/divider/Divider";
import SearchBar from "../../components/searchBar/SearchBar";
import TitleBar from "../../components/titleBar/TitleBar";
import "./friends-list.css";
import FriendsDetail from "./FriendsDetail";

const FriendsList = (props) => {
  const frndInput = useRef(null);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.friendsData.friends, shallowEqual);
  useEffect(() => {
    dispatch(getFriends());
  }, []);
  return (
    <div className="friends-list-wrapper">
      <Card isMobile={window.isMobile}>
        <TitleBar title="Friends List" />
        <SearchBar ref={frndInput} />
        <Divider />
        {data.map((cur, index) => {
          return FriendsDetail(cur, index);
        })}
      </Card>
    </div>
  );
};

export default FriendsList;
