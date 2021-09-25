import "./action-icon.css";

const ActionIcon = (props) => {
  const { children, style } = props;
  return (
    <div className="action-icon-wrapper" style={{ ...style }}>
      {children}
    </div>
  );
};

export default ActionIcon;
