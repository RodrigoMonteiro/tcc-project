import './styles.css'
import { MdSettings, MdExitToApp } from "react-icons/md";
export function SelectItem(props){
    const {name , icon} = props
    function createIcon(){
        switch (icon) {
          case "MdSettings":
            return <MdSettings />;
          case "MdExitToApp":
            return <MdExitToApp />;
        }
    }
    return (
      <div className="selectItem-container">
        <span className="selectItem-icon">{createIcon()}</span>
        <span className="selectItem-title">{name}</span>
      </div>
    );
}