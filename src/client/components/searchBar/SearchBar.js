import { forwardRef } from "react";
import { useDispatch } from "react-redux";
import { addFriend } from "../../actions/friendListActions";
import "./search-bar.css";

const SearchBar = forwardRef((props, ref) => {
  const { filterKey, onChange, clearInput } = props;
  const dispatch = useDispatch();

  const onKeyPress = (e) => {
    if (e.code === "Enter" && ref.current.value?.length > 0) {
      dispatch(
        addFriend({
          name: ref.current.value,
          isFavourite: false
        })
      );
      //ref.current.value = "";
      clearInput();
    }
  };

  return (
    <input
      type="text"
      value={filterKey}
      placeholder="Enter Your Friend Name"
      ref={ref}
      onChange={onChange}
      onKeyPress={onKeyPress}
    />
  );
});

export default SearchBar;
