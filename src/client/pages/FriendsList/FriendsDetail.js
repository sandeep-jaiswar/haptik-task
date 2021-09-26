import { AiFillStar, AiOutlineDelete, AiOutlineStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  deleteFriend,
  markFavourite,
  unmarkFavourite
} from "../../actions/friendListActions";
import ActionIcon from "../../components/actionIcon/ActionIcon";
import Divider from "../../components/divider/Divider";

const FriendsDetail = ({ friend, index }) => {
  const dispatch = useDispatch();
  const { id, name, isFavourite } = friend;
  const styleObj1 = {
    right: `20%`
  };
  const styleObj2 = {
    right: `0%`
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
  };
  return (
    <div key={index}>
      <div className="contact-panel">
        <div>
          <div className="contact-name">
            {name}
            {isFavourite}
          </div>
          <div className="static-content">is your friend</div>
        </div>
        <ActionIcon style={styleObj1} clickHandler={favHandler}>
          {isFavourite ? <AiFillStar /> : <AiOutlineStar />}
        </ActionIcon>
        <ActionIcon style={styleObj2} clickHandler={deleteHandler}>
          <AiOutlineDelete />
        </ActionIcon>
      </div>
      <Divider />
    </div>
  );
};
export default FriendsDetail;
