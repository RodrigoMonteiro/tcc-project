import "./styles.css";
import { FaUserAlt } from "react-icons/fa";
import { Switch } from "../Switch";
export function Header(props) {
  
  return (
    <div className="header-container">
      <span className="header-title">
        <h1>Home</h1>
      </span>
      <Switch rounded={true} isToggled={props.isLight} onToggle={()=> {props.changeTheme()}}></Switch>
      <div className="header-btn">
        <FaUserAlt size={24}></FaUserAlt>
      </div>
    </div>
  );
}
