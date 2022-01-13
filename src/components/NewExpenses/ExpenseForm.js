import "./ExpenseForm.css";

import {useState} from 'react';

function ExpenseForm(props) {
  const [titulodoDADO,setTitulo] = useState('');
  const [precodoDADO,setPreco] = useState('');
  const [diadoDADO,setData] = useState('');
  

  const pegarTitulo = (event) => {
    setTitulo(event.target.value);
  };
  const pegarPreco = (event) => {
    setPreco(event.target.value);
  };
  const pegarData = (event) => {
    setData(event.target.value);
  };

  const mandarFormulario = (event) =>{
    event.preventDefault();
    const Dado = {
      nome: titulodoDADO,
      preco: precodoDADO,
      tempo: new Date(diadoDADO)
    };

    props.onSaveData(Dado);
    setTitulo('');
    setPreco('');
    setData('');
  }
  return (
    <form onSubmit={mandarFormulario}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Nome</label>
          <input type="text" value={titulodoDADO} onChange={pegarTitulo}></input>
        </div>
        <div className="new-expense__control">
          <label>Preço</label>
          <input type="number" min="0.01" step="0.01" value={precodoDADO} onChange={pegarPreco}/>
        </div>
        <div className="new-expense__control">
          <label>Data</label>
          <input type="date"  min='2019-01-01'
            max='2022-12-31'  value={diadoDADO} onChange={pegarData}></input>
        </div>
      </div>
      <div className="new-expense__actions">
          <button type="submit">Adicionar</button>
        </div>
    </form>
  );
}

export default ExpenseForm;
