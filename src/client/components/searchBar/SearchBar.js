import { forwardRef } from "react";
import { useDispatch } from "react-redux";
import { addFriend } from "../../actions/friendListActions";
import "./search-bar.css";

const SearchBar = forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const onChange = (e) => {
    //console.log(ref.current.value);
  };
  const onKeyPress = (e) => {
    if (e.code === "Enter") {
      dispatch(
        addFriend({
          name: ref.current.value,
          isFavourite: false
        })
      );
    }
  };

  return (
    <input
      type="text"
      placeholder="Enter Your Friend Name"
      ref={ref}
      onChange={onChange}
      onKeyPress={onKeyPress}
    />
  );
});

export default SearchBar;
