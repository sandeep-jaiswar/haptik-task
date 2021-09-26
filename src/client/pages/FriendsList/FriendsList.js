import { useEffect, useRef, useState } from "react";
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
  const [filterKey, setFilterKey] = useState("");
  const dispatch = useDispatch();
  const data = useSelector((state) => state.friendsData.friends, shallowEqual);
  const onChange = (e) => {
    setFilterKey(e.target.value);
  };

  useEffect(() => {
    dispatch(getFriends());
  }, []);
  return (
    <div className="friends-list-wrapper">
      <Card isMobile={window.isMobile}>
        <TitleBar title="Friends List" />
        <SearchBar ref={frndInput} filterKey={filterKey} onChange={onChange} />
        <Divider />
        {data
          .filter((item) => item?.name.includes(filterKey))
          .map((cur, index) => {
            return <FriendsDetail friend={cur} index={index} />;
          })}
      </Card>
    </div>
  );
};

export default FriendsList;
