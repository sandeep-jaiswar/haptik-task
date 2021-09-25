import ActionIcon from "../../components/actionIcon/ActionIcon";
import Card from "../../components/card/Card";
import TitleBar from "../../components/titleBar/TitleBar";
import data from "./data";
import { AiFillStar, AiOutlineStar, AiOutlineDelete } from "react-icons/ai";
import "./friends-list.css";
import Divider from "../../components/divider/Divider";
import SearchBar from "../../components/searchBar/SearchBar";

const FriendsDetail = (friend, index) => {
  const styleObj1 = {
    right: `15%`
  };
  const styleObj2 = {
    right: `0%`
  };
  return (
    <>
      <div className="contact-panel" key={index}>
        <div>
          <div className="contact-name">{friend.name}</div>
          <div>is your friend</div>
        </div>
        <ActionIcon style={styleObj1}>
          {friend.isFavourite ? <AiFillStar /> : <AiOutlineStar />}
        </ActionIcon>
        <ActionIcon style={styleObj2}>
          <AiOutlineDelete />
        </ActionIcon>
      </div>
      <Divider />
    </>
  );
};

const FriendsList = (props) => {
  return (
    <div className="friends-list-wrapper">
      <Card isMobile={window.isMobile}>
        <TitleBar title="Friends List" />
        <SearchBar />
        <Divider />
        {data.map((cur, index) => {
          return FriendsDetail(cur, index);
        })}
      </Card>
    </div>
  );
};

export default FriendsList;
