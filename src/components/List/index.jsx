import Card from "../Card";
import "./index.css";
function List({ listTransactions, setListTransactions, saida, entrada }) {
  const saidaFiltro = () => {
    setListTransactions(saida);
  };
  const entradaFiltro = () => {
    setListTransactions(entrada);
  };
  const todosFiltro = () => {
    setListTransactions([...saida, ...entrada]);
  };

  return (
    <div className="tudo">
      <div className="titulo">
        <h3>Financial summary</h3>
        <div className="botoesBox">
          <button className="cinzaRosa" onClick={todosFiltro}>
            All
          </button>
          <button className="cinzaRosa" onClick={entradaFiltro}>
            Incoming
          </button>
          <button className="cinzaRosa" onClick={saidaFiltro}>
            Outgoing
          </button>
        </div>
      </div>
      {listTransactions.length !== 0 ? (
        listTransactions.map((transaction, index) => (
          <Card
            transaction={transaction}
            key={index}
            setListTransactions={setListTransactions}
            listTransactions={listTransactions}
          />
        ))
      ) : (
        <h3>You don't have any releases yet.</h3>
      )}
    </div>
  );
}
export default List;
