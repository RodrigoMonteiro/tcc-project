import './styles.css'
export function NavbarItem(props){
    const {name , icon , isOpened} = props 
    return (
      <div className={`item-container ${isOpened ? "" : "navbar-closed"}`}>
        <span className="item-icon">{icon}</span>
        <span className={`item-name ${isOpened ? "" : "nameItem-closed"}`}>{name}</span>
      </div>
    );
}