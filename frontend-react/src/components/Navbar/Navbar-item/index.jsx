import React, {useState} from "react";
import "./styles.css";
import {
  BsListUl,
  BsFillHouseDoorFill,
  BsFillCalendar3WeekFill,
  BsStopwatchFill,
  BsFillPencilFill,
} from "react-icons/bs";

import { MdOutlineEditCalendar } from "react-icons/md";

import { GlobalContext } from "../../../providers/globalProps";

export function NavbarItem(props) {
  const [itemSelected , setItemSelected] = useState(false)
  const { setGlobalProps } = React.useContext(GlobalContext);
  const { name, icon, isOpened, changeCurrentItem, currentItem } = props;
  
  
  function toggleItemSelected(){

    setItemSelected(!itemSelected)
  }

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
    <div
      className={`item-container 
      ${isOpened ? "" : "navbar-closed"}  
      ${itemSelected ? "isItemSelected" : ""}  
       
      
      `}
      onClick={() => {
        setGlobalProps({ titleName: name });
      toggleItemSelected()


      }}
    >
      <span className={`item-icon ${isOpened ? "" : "icon-closed"}`}>
        {createIcon()}
      </span>
      <span className={`item-name ${isOpened ? "" : "nameItem-closed"}`}>
        {name}
      </span>
    </div>
  );
}
