import "./index.css";
function TotalMoney({ listTransactions }) {
  const prices = listTransactions.map((transacao) => transacao.value);
  const totalPrice = prices.reduce((soma, i) => soma + i, 0);

  return (
    <div className="bigBox">
      <div>
        <h3>Total: </h3>
        <p>The value refers to balance</p>
      </div>
      <span>$ {totalPrice}</span>
    </div>
  );
}
export default TotalMoney;
