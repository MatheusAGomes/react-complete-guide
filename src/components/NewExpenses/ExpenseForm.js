import "./ExpenseForm.css";

import {useState} from 'react';

function ExpenseForm(props) {
  const [titulo,setTitulo] = useState('');
  const [preco,setPreco] = useState('');
  const [dia,setData] = useState('');
  

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
      titulo: titulo,
      preco: preco,
      dia: new Date(dia)
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
          <input type="text" value={titulo} onChange={pegarTitulo}></input>
        </div>
        <div className="new-expense__control">
          <label>Preço</label>
          <input type="number" min="0.01" step="0.01" value={preco} onChange={pegarPreco}/>
        </div>
        <div className="new-expense__control">
          <label>Data</label>
          <input type="date" value={dia} onChange={pegarData}></input>
        </div>
      </div>
      <div className="new-expense__actions">
          <button type="submit">Adicionar</button>
        </div>
    </form>
  );
}

export default ExpenseForm;
