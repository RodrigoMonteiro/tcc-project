
import { useState } from 'react';
import './styles.css'
export function CadastroSemestre() {
  

 const [optionCadastrarSelected , setOptionCadastrarSelected] = useState(true)
 const [optionEditarSelected , setOptionEditarSelected] = useState(false)
 
 function toggleSelected(){
    setOptionCadastrarSelected(!optionCadastrarSelected)
    setOptionEditarSelected(!optionEditarSelected)
 }

  return (
    <div className="cadastro-semestre-container">
      <div className="cadastro-semestre-options">
        <span
          onClick={toggleSelected}
          className={`cadastro-semestre-btn-edit-options ${
            optionCadastrarSelected ? "cadastro-semestre-options-selected" : ""
          }`}
        >
          Cadastrar novo semestre
        </span>
        <span
          onClick={toggleSelected}
          className={`cadastro-semestre-btn-edit-options ${
            optionEditarSelected ? "cadastro-semestre-options-selected" : ""
          }`}
        >
          Editar semestres
        </span>
      </div>

      <div className="cadastro-semestre-card">
        <span className="cadastro-semestre-span">Semestre</span>
        <input className="cadastro-semestre-input" type="text" />
        <span className="cadastro-semestre-informacao">
          Disciplinas que pertencem a este período
        </span>
        <span className="cadastro-semestre-span">Disciplina</span>
        <input className="cadastro-semestre-input" type="text" />
        <div className="cadastro-semestre-btn-actions">
          <button className="btn-adicionar-semestre">+</button>
          <button className="btn-salvar">Salvar</button>
        </div>
      </div>
    </div>
  );
}
