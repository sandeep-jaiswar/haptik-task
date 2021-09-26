import ActionIcon from "../actionIcon/ActionIcon";
import { TiArrowUnsorted } from "react-icons/ti";
import "./title-bar.css";

const TitleBar = ({ title, clickHandler }) => {
  const styleObj = {
    position: `unset`,
    border: 0
  };
  const iconStyle = {
    color: `#fff`
  };
  return (
    <div className="title-bar">
      <div>{title}</div>
      <ActionIcon style={styleObj} clickHandler={clickHandler}>
        <TiArrowUnsorted style={iconStyle} />
      </ActionIcon>
    </div>
  );
};

export default TitleBar;
