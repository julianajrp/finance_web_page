import './index.css'
function Header({inicial, setInicial}){
    function switchOff(){
        setInicial(true)
      }
    return(
        <>
        <nav>
            <h1>Nu <strong>Kenzie</strong></h1>
            <button type='button' onClick={ switchOff }>Inicio</button>
        </nav>
        </>
    )
}
export default Header