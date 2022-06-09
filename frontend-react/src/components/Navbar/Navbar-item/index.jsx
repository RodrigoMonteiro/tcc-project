import "./styles.css";
import {
  BsListUl,
  BsFillHouseDoorFill,
  BsFillCalendar3WeekFill,
  BsStopwatchFill,
  BsFillPencilFill,
} from "react-icons/bs";
import { MdOutlineEditCalendar } from "react-icons/md";
export function NavbarItem(props) {
  const { name, icon, isOpened } = props;
  function createIcon() {
    switch (icon) {
      case "BsFillHouseDoorFill":
        return <BsFillHouseDoorFill />;
      case "BsListUl":
        return <BsListUl />;
      case "BsFillCalendar3WeekFill":
        return <BsFillCalendar3WeekFill />;
      case "BsStopwatchFill":
        return <BsStopwatchFill />;
      case "BsFillPencilFill":
        return <BsFillPencilFill />;
      case "MdOutlineEditCalendar":
        return <MdOutlineEditCalendar />;
    }
  }
  return (
    <div className={`item-container ${isOpened ? "" : "navbar-closed"}`}>
      <span className={`item-icon ${isOpened ? "" : "icon-closed"}`}>
        {createIcon()}
      </span>
      <span className={`item-name ${isOpened ? "" : "nameItem-closed"}`}>
        {name}
      </span>
    </div>
  );
}
