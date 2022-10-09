import "./index.css";
function Header({ setInicial }) {
  function switchOff() {
    setInicial(true);
  }
  return (
    <>
      <nav>
        <h1>
          Nu <strong>Finance</strong>
        </h1>
        <button type="button" onClick={switchOff}>
          Go Back
        </button>
      </nav>
    </>
  );
}
export default Header;
