import './index.css'
function TotalMoney({listTransactions}){
    
    const prices = listTransactions.map(transacao => transacao.value)
    const totalPrice = prices.reduce((soma,i) => soma + i,0)

    return (
        <div className='bigBox'>
            <div>
                <h3>Valor Total: </h3>
                <p>O valor se refere ao saldo</p>
            </div>
            <span>R$ {totalPrice}</span>
        </div>
    )
}
export default TotalMoney