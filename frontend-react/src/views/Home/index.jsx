import './styles.css'
export function Home(){
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
            <button className="home-form-body-btn">Entrar</button>
            <span className="cadastrar">
              Não possui conta? Se cadastre <a href="">aqui</a>
            </span>
          </div>
        </div>
      </div>
    );
}