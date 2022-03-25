import './App.css';
import { Teste, Click } from './utils'

function App() {

  // criar uma função externa que chame o numero digitado no input no console log acrescentando
  // a mensagem --é muito louco--

  //passar duas variaveis para um segunda função aonde elas retornem dentro de um alert depois do click
  return (
    <form>
      <input onChange={(e) => { Teste(e.target.value) }} />
      <button onClick={(e) => { Click('Felipe') }}>Enviar</button>
    </form>
  )
}

export default App;
