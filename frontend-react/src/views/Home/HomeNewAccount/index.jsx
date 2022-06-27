import './styles.css'
export function HomeNewAccount(){
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
            <button className="home-form-body-btn-create-account">
              Criar conta
            </button>
            <span className="home-span-create-account">
              Já possui conta? Realize o login <a href="">aqui</a>
            </span>
          </div>
        </div>
      </div>
    );
}