import "./styles.css";
import { FaUserAlt } from "react-icons/fa";
import { Switch } from "../Switch";
import { useState } from "react";
import { Select } from "../Select/index";
export function Header(props) {
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  function toggleSelect() {
    setIsSelectOpen(!isSelectOpen);
    console.log(isSelectOpen);
  }
  return (
    <div className="header-container">
      <span className="header-title">
        <h1>Home</h1>
      </span>
      <Switch
        rounded={true}
        isToggled={props.isLight}
        onToggle={() => {
          props.changeTheme();
        }}
      ></Switch>
      <div className="header-btn">
        <FaUserAlt onClick={() => toggleSelect()} size={24}></FaUserAlt>
        <Select isOpen={isSelectOpen}></Select>
      </div>
    </div>
  );
}
