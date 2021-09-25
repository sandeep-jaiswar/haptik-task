import "./action-icon.css";

const ActionIcon = (props) => {
  const { children, style, clickHandler } = props;
  return (
    <div
      className="action-icon-wrapper"
      onClick={clickHandler}
      style={{ ...style }}
    >
      {children}
    </div>
  );
};

export default ActionIcon;
