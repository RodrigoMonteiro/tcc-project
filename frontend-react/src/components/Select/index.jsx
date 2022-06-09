import { SelectItem } from './Select-item'
import './styles.css'
export function Select(props){
  const { isOpen } = props;
    return (
      <div className={`select-container ${isOpen ? "select-open" : "select-close"}`}>
        <SelectItem name="Configuração" icon="MdSettings"></SelectItem>
        <SelectItem name="Sair" icon="MdExitToApp"></SelectItem>
      </div>
    );
}