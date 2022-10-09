import './index.css'
import { useState } from 'react'

function Form({setListTransactions , setSaida, setEntrada}){
    const [inputDesc, setInputDesc] = useState('')
    const [inputValor, setInputValor] = useState('')
    const [inputSelect, setInputSelect] = useState('entrada')
    function submitValores(event){
        
        event.preventDefault()
        let valorNumber = parseInt(inputValor)
        if( inputDesc === '' || inputSelect === '' || inputValor === ''){
            alert ('preencha todos os campos')
        } else {
            if( inputSelect === 'saída'){
                valorNumber = -(valorNumber)
                
                setListTransactions(listTransactions => [...listTransactions,
                    { description: inputDesc, type: inputSelect, value: valorNumber}
                ]) 
                setSaida(saida => [...saida,
                    { description: inputDesc, type: inputSelect, value: valorNumber}
                ] )
            } else {
                
                setListTransactions(listTransactions => [...listTransactions,
                { description: inputDesc, type: inputSelect, value: valorNumber}
                ]) 
                setEntrada( entrada => [...entrada, { description: inputDesc, type: inputSelect, value: valorNumber}])
            }
        }
    }
    
    return (
        <form onSubmit={submitValores}>
            <label htmlFor="descricao">Descrição</label>
            <input placeholder="Digite aqui sua descrição" className='biginput' onChange={(event)=>setInputDesc(event.target.value)}></input>
            <div className='box'>
                <div className='boxes'>
                    <label htmlFor='valor'>Valor</label>
                    <input  placeholder="1" type='number'onChange={(event)=>setInputValor(event.target.value)}></input>
                </div>
                <div className='boxes'>
                    <label htmlFor='select'>Tipo de valor</label>
                    <select name="select" onChange={(event)=>setInputSelect(event.target.value)}>
                        <option value='entrada'>Entrada</option>
                        <option value='saída'>Saída</option>
                    </select>
                </div>
            </div>
            
            <button type='submit' className='botaoRosa'>Inserir valor</button>
        </form>
    )
}
export default Form