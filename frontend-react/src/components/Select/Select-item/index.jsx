import './styles.css'
import { MdSettings, MdExitToApp } from "react-icons/md";
import { GlobalContext } from "../../../providers/globalProps";
import { useContext } from "react";

export function SelectItem(props){
  const { globalProps, setGlobalProps } = useContext(GlobalContext);
  const {name , icon} = props
  
  function createIcon(){
        switch (icon) {
          case "MdSettings":
            return <MdSettings />;
          case "MdExitToApp":
            return <MdExitToApp />;
        }
    }

  function logout() {
       setGlobalProps({
         ...globalProps,
         isLogged: false,
       });
       console.log("Fui chamado!");
     }
    return (
      <div className="selectItem-container" onClick={() => {
        if (icon === "MdExitToApp"){
          logout()
        }
      }}>
        <span className="selectItem-icon">{createIcon()}</span>
        <span className="selectItem-title">{name}</span>
      </div>
    );
}