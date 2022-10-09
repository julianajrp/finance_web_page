import './index.css'
import lixo from './lixo.png'
function Card({ transaction, setListTransactions, listTransactions }){
    function removeTransaction(transactionToRemove){
        const newList = listTransactions.filter((trans)=> trans !== transactionToRemove)
        setListTransactions(newList)
    }
    return(
        <div>
            { transaction.type === 'saída' ? 
            <div className='cardSaida' key={transaction}>
                <div>
                    <h3 className='description'>{transaction.description}</h3>
                    <p>{transaction.type}</p>
                </div>
                <div className='preco'>
                    <p className='valor'>R$ {transaction.value},00</p>
                    <button type='button' onClick={()=> removeTransaction(transaction)}><img className='lixo' alt='lixo' src={lixo}/></button>
                </div>
            </div>
            :
            <div className='cardEntrada' key={transaction}>
                <div>
                    <h3 className='description'>{transaction.description}</h3>
                    <p>{transaction.type}</p>
                </div>
                <div className='preco'>
                    <p className='valor'>R$ {transaction.value},00</p>
                    <button type='button'onClick={()=> removeTransaction(transaction)}><img className='lixo' alt='lixo' src={lixo}/></button>
                </div>
            </div>} 
        </div>
        )
}
  
export default Card
// onClick={transactions.map((transaction, index) => transaction.filter()}