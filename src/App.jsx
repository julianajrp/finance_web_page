
import './App.css';
import { useState } from 'react'
import Header from './components/Header';
import Form from './components/Form';
import List from './components/List';
import TotalMoney from './components/TotalMoney';
import Inicial from './components/Inicial';

function App() {
  const [listTransactions, setListTransactions] = useState([
    // { description: "Salário recebido", type: "entrada", value: 2500 },
    // { description: "Conta de luz", type: "saída", value: -150 },
    // { description: "Conta de familyfriendly", type: "saída", value: -250 }
])
  const [inicial, setInicial] = useState(true)
  const [saida, setSaida] = useState([])
  const [entrada, setEntrada] = useState([])


  return (
    <div className="App">
      {inicial === true ?
      <Inicial inicial={inicial} setInicial={setInicial}/>
      :
      <>
      
      <Header inicial={inicial} setInicial={setInicial}/>
        <div className='corpo'>
          <div className='divEsquerda'>
            <Form setListTransactions={setListTransactions}  setSaida={setSaida} setEntrada={setEntrada}/>
            <TotalMoney listTransactions={listTransactions}/>
          </div>
          <div className='divDireita'>
            <List listTransactions={listTransactions} setListTransactions={setListTransactions} saida={saida} entrada={entrada} />
          </div>
        </div>
      </>
    }
    </div>
  );
}

export default App;
