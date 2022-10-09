import "./index.css";
import imagem from "./imagem.png";
function Inicial({ inicial, setInicial }) {
  function switchBotao() {
    setInicial(false);
  }
  return (
    <>
      <div className="bigBoxe">
        <div className="escrita">
          <h1>
            Nu<strong className="strongzao">Finance</strong>
          </h1>
          <h2>Center the</h2>
          <h2>control of your</h2>
          <h2>finances</h2>
          <span className="spanInicial">and fast!</span>
          <button className="botaoRosaa" onClick={switchBotao}>
            Start
          </button>
        </div>
        <div className="imagem">
          <img src={imagem} alt="" className="imgInicial" />
        </div>
      </div>
    </>
  );
}
export default Inicial;
