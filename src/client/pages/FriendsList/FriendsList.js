import { useEffect, useRef, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { addFriend, getFriends } from "../../actions/friendListActions";
import Card from "../../components/card/Card";
import Divider from "../../components/divider/Divider";
import Paginator from "../../components/paginator/Paginator";
import SearchBar from "../../components/searchBar/SearchBar";
import TitleBar from "../../components/titleBar/TitleBar";
import "./friends-list.css";
import FriendsDetail from "./FriendsDetail";

const FriendsList = (props) => {
  const frndInput = useRef(null);
  const [filterKey, setFilterKey] = useState("");
  const [shouldSort, setShouldSort] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.friendsData.friends, shallowEqual);
  const onChange = (e) => {
    setFilterKey(e.target.value);
  };
  const clearInput = () => {
    setFilterKey("");
  };
  const sortArr = (arr) => {
    if (!shouldSort) {
      return arr;
    } else {
      return arr
        .filter((e) => e.isFavourite === true)
        .concat(arr.filter((e) => e.isFavourite !== true));
    }
  };

  useEffect(() => {
    dispatch(getFriends());
  }, []);
  return (
    <div className="friends-list-wrapper">
      <Card isMobile={window.isMobile}>
        <TitleBar
          title="Friends List"
          clickHandler={() => setShouldSort(!shouldSort)}
        />
        <SearchBar
          ref={frndInput}
          filterKey={filterKey}
          clearInput={clearInput}
          onChange={onChange}
        />
        <Divider />
        <Paginator
          data={sortArr(data.filter((item) => item?.name?.includes(filterKey)))}
        ></Paginator>
      </Card>
    </div>
  );
};

export default FriendsList;
