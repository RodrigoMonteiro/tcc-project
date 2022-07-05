import './styles.css'
import {GlobalContext} from '../../providers/globalProps'
import { useContext } from 'react';
export function Home(){
  const {globalProps , setGlobalProps} = useContext(GlobalContext) 
  function login(){
    setGlobalProps({
      ...globalProps,
      isLogged: true
    })
  }
  function createNewAccountPage(){
    setGlobalProps({
      ...globalProps,
      hasAccount: !globalProps.hasAccount
    })
  }
  return (
    <div className="home-container">
      <div className="home-form-container">
        <div className="home-form-header">
          <img src="" alt="Logo over here" />
          <h2>Otimize seu tempo</h2>
        </div>
        <div className="home-form-body">
          <div className="home-form-body-input-email">
            <span>Email:</span>
            <input className="home-form-body-input-field" type="text" />
          </div>
          <div className="home-form-body-input-password">
            <span>Senha:</span>
            <input className="home-form-body-input-field" type="text" />
          </div>
          <button className="home-form-body-btn" onClick={login}>
            Entrar
          </button>
          <span className="cadastrar">
            Não possui conta? Se cadastre{" "}
            <span
              onClick={createNewAccountPage}
              style={{ cursor: "pointer" }}
            >
              <strong>aqui</strong>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}