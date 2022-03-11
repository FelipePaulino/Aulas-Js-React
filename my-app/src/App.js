import './App.css';

function App() {
  // onClick no click
  // onChange na mudança

  // fazer um input com onChange que o a pessoa digitar ele vai somar com uma varivael
  // com o valor 4 e vai retornar o alert com o resultado


//fazer um click numa div com texto qualquer que retorne um alert o texto "Você conseguiu" 
// de uma variavel
  return (
    <div className="App">
      <form>
        <label>Nome:</label>
        <input onChange={(e) => { console.log(e.target.value) }} />
        <button onClick={() => { alert('você enviou a requisição') }}>Enviar</button>
      </form>
      <p onClick={() => { alert('você enviou a requisição') }} >texto teste de click</p>
    </div>
  
  );
}

export default App;
