import { useState } from "react";
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";
import FriendsDetail from "../../pages/FriendsList/FriendsDetail";
import ActionIcon from "../actionIcon/ActionIcon";
import "./paginator.css";
const Paginator = ({ data, itemsPerPage }) => {
  const [activePage, setActivePage] = useState(1);
  const indexOfLastItem = activePage * itemsPerPage;
  const indexOfFirsttItem = indexOfLastItem - itemsPerPage;
  const currentPageData = data.slice(indexOfFirsttItem, indexOfLastItem);
  const { isMobile } = window;
  return (
    <div className="paginator-wrapper">
      <div>
        {currentPageData.map((cur, index) => {
          return (
            <FriendsDetail
              key={index}
              friend={cur}
              index={index}
              setActivePage={setActivePage}
            />
          );
        })}
      </div>
      {data?.length > 4 ? (
        <div className="paginator-btns">
          <ActionIcon
            style={{ right: isMobile ? `20%` : `10%` }}
            clickHandler={() =>
              setActivePage(activePage === 1 ? activePage : activePage - 1)
            }
          >
            <AiOutlineCaretLeft />
          </ActionIcon>
          <ActionIcon
            style={{ right: `0%` }}
            clickHandler={() => {
              if (activePage < Math.ceil(data.length / itemsPerPage)) {
                setActivePage(activePage + 1);
              }
            }}
          >
            <AiOutlineCaretRight />
          </ActionIcon>
        </div>
      ) : null}
    </div>
  );
};

export default Paginator;
