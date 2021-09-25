import { AiFillStar, AiOutlineDelete, AiOutlineStar } from "react-icons/ai";
import ActionIcon from "../../components/actionIcon/ActionIcon";
import Divider from "../../components/divider/Divider";

const FriendsDetail = (friend, index) => {
  const styleObj1 = {
    right: `20%`
  };
  const styleObj2 = {
    right: `0%`
  };
  const favHandler = (e, index) => {};
  const deleteHandler = (e, index) => {};
  return (
    <div key={index}>
      <div className="contact-panel">
        <div>
          <div className="contact-name">{friend.name}</div>
          <div className="static-content">is your friend</div>
        </div>
        <ActionIcon
          style={styleObj1}
          clickHandler={(e) => favHandler(e, index)}
        >
          {friend.isFavourite ? <AiFillStar /> : <AiOutlineStar />}
        </ActionIcon>
        <ActionIcon
          style={styleObj2}
          clickHandler={(e) => deleteHandler(e, index)}
        >
          <AiOutlineDelete />
        </ActionIcon>
      </div>
      <Divider />
    </div>
  );
};
export default FriendsDetail;
