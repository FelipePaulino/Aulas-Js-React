import './App.css';

function App() {
  // MAP SEMPRE EM USADO PARA TRAZER DADOS DE UM ARRAY []
  const celulas = [
    {
      lider: "Fulano",
      numero_celula: 10,
      mais_de_10: true,
      membros: ["abreu"]
    },
    {
      lider: "Fulano",
      numero_celula: 10,
      mais_de_10: false,
      membros: ["joao", "maria", "zezinho"]
    },
    {
      lider: "Fulano 3",
      numero_celula: 12,
      mais_de_10: false,
      membros: ["joao", "maria", "zezinho"]
    }
  ]

let ativo = true

  return (
    <div className="App">

      {
        celulas.map((item, index) => {

          return (
            <div key={index} className='box'>
              <div>{item.lider}</div>
              <div>{item.numero_celula}</div>
              {item.mais_de_10 && <span>Lider Bom</span> }
         
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
