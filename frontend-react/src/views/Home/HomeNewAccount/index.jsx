import "./styles.css";
import { GlobalContext } from "../../../providers/globalProps";
import { useContext } from "react";
export function HomeNewAccount() {
  const { globalProps, setGlobalProps } = useContext(GlobalContext);

  function createNewAccount() {
    setGlobalProps({
      ...globalProps,
      hasAccount: true,
    });
  }
  function loginPage() {
    setGlobalProps({
      ...globalProps,
      hasAccount: true,
    });
  }

  return (
    <div className="home-container-new-account">
      <div className="home-form-container-new-account">
        <div className="home-form-header-new-account">
          <img src="" alt="Logo over here" />
          <h2>Otimize seu tempo</h2>
        </div>
        <div className="home-form-body-new-account">
          <div className="home-form-body-input-email">
            <span>Email:</span>
            <input className="home-form-body-input-field" type="text" />
          </div>
          <div className="home-form-body-input-password">
            <span>Senha:</span>
            <input className="home-form-body-input-field" type="text" />
          </div>
          <div className="home-form-body-input-password">
            <span>Repita a senha:</span>
            <input className="home-form-body-input-field" type="text" />
          </div>
          <button
            className="home-form-body-btn-create-account"
            onClick={createNewAccount}
          >
            Criar conta
          </button>
          <span className="home-span-create-account">
            Já possui conta? Realize o login{" "}
            <span onClick={loginPage} style={{ cursor: "pointer" }}>
              <strong>aqui</strong>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
