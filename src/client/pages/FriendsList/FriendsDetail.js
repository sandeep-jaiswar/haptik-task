import { AiFillStar, AiOutlineDelete, AiOutlineStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  deleteFriend,
  markFavourite,
  unmarkFavourite
} from "../../actions/friendListActions";
import ActionIcon from "../../components/actionIcon/ActionIcon";
import Divider from "../../components/divider/Divider";

const FriendsDetail = ({ friend, index, setActivePage }) => {
  const dispatch = useDispatch();
  const { id, name, isFavourite } = friend;
  const { isMobile } = window;
  const styleObj1 = {
    right: isMobile ? `20%` : `10%`
  };
  const styleObj2 = {
    right: `0%`
  };
  const iconStyle = {
    color: `#bbb`
  };
  const favHandler = () => {
    if (!!isFavourite) {
      dispatch(unmarkFavourite(friend));
    } else {
      dispatch(markFavourite(friend));
    }
  };
  const deleteHandler = () => {
    dispatch(deleteFriend(id));
    setActivePage && setActivePage(1);
  };
  return (
    <div key={index}>
      <div className="contact-panel">
        <div>
          <div className="contact-name">{name}</div>
          <div className="static-content">is your friend</div>
        </div>
        <ActionIcon style={styleObj1} clickHandler={favHandler}>
          {isFavourite ? (
            <AiFillStar style={iconStyle} />
          ) : (
            <AiOutlineStar style={iconStyle} />
          )}
        </ActionIcon>
        <ActionIcon style={styleObj2} clickHandler={deleteHandler}>
          <AiOutlineDelete style={iconStyle} />
        </ActionIcon>
      </div>
      <Divider />
    </div>
  );
};
export default FriendsDetail;
