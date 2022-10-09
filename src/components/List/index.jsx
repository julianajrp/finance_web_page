import Card from '../Card'
import './index.css'
function List( {listTransactions, setListTransactions, saida, entrada} ){
   
   const saidaFiltro = ()=> {
      
   setListTransactions(saida)
   } 
   const entradaFiltro = ()=> {
      
      setListTransactions(entrada)
   } 
   const todosFiltro = ()=> {
      setListTransactions([...saida, ...entrada])
   }

   

   
    return(
      <div className='tudo'>
         <div className='titulo'>
            <h3>Resumo financeiro</h3>
            <div className='botoesBox'>
               <button className='cinzaRosa' onClick={todosFiltro}>Todos</button>
               <button className='cinzaRosa' onClick={entradaFiltro}>Entradas</button>
               <button className='cinzaRosa' onClick={saidaFiltro}>Despesas</button> 
            </div>
         </div>
         {listTransactions.length !== 0 ? 
            listTransactions.map((transaction, index) =>
            <Card transaction={transaction} key={index} setListTransactions={setListTransactions} listTransactions={listTransactions}/>
            ) :
            <h3>Você ainda não possui nenhum lançamento</h3> }
      </div>
    );
    
}
export default List
