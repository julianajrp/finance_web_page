import "./index.css";
import { useState } from "react";

function Form({ setListTransactions, setSaida, setEntrada }) {
  const [inputDesc, setInputDesc] = useState("");
  const [inputValor, setInputValor] = useState("");
  const [inputSelect, setInputSelect] = useState("incoming");
  function submitValores(event) {
    event.preventDefault();
    let valorNumber = parseInt(inputValor);
    if (inputDesc === "" || inputSelect === "" || inputValor === "") {
      alert("all fields required");
    } else {
      if (inputSelect === "outgoing") {
        valorNumber = -valorNumber;

        setListTransactions((listTransactions) => [
          ...listTransactions,
          { description: inputDesc, type: inputSelect, value: valorNumber },
        ]);
        setSaida((outgoing) => [
          ...outgoing,
          { description: inputDesc, type: inputSelect, value: valorNumber },
        ]);
      } else {
        setListTransactions((listTransactions) => [
          ...listTransactions,
          { description: inputDesc, type: inputSelect, value: valorNumber },
        ]);
        setEntrada((incoming) => [
          ...incoming,
          { description: inputDesc, type: inputSelect, value: valorNumber },
        ]);
      }
    }
  }

  return (
    <form onSubmit={submitValores}>
      <label htmlFor="descricao">Description</label>
      <input
        placeholder="Type here your description"
        className="biginput"
        onChange={(event) => setInputDesc(event.target.value)}
      ></input>
      <div className="box">
        <div className="boxes">
          <label htmlFor="valor">Value</label>
          <input
            placeholder="1"
            type="number"
            onChange={(event) => setInputValor(event.target.value)}
          ></input>
        </div>
        <div className="boxes">
          <label htmlFor="select">Value type</label>
          <select
            name="select"
            onChange={(event) => setInputSelect(event.target.value)}
          >
            <option value="incoming">Incoming</option>
            <option value="outgoing">Outgoing</option>
          </select>
        </div>
      </div>

      <button type="submit" className="botaoRosa">
        Insert value
      </button>
    </form>
  );
}
export default Form;
