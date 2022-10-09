import './index.css'
import imagem  from './imagem.png'
function Inicial({inicial, setInicial}){
    function switchBotao(){
        setInicial(false)
      }
    return(
        <>
    <div className='bigBoxe'>
        <div className='escrita'>
            <h1>Nu<strong className='strongzao'>Kenzie</strong></h1>
            <h2>Centralize o</h2>
            <h2>controle das suas</h2>
            <h2>finanças</h2>
            <span className='spanInicial'>de forma rapida</span>
            <button className='botaoRosaa' onClick={switchBotao}>Iniciar</button>
        </div>
        <div className='imagem'>
            <img src={imagem} alt="" className='imgInicial'/>
        </div>
    </div>
    </>
    )
}
export default Inicial