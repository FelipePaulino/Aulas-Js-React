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
      lider: "Fulano 2",
      numero_celula: 11,
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

  // fazer uma lista exibindo 5 pessoas com nome, idade, data de nascimento e nome da mae, e para 3 pessoa 
  // o nome do pai porem quem não tiver o pai nem o titulo pai


  return (
    <div className="App">
      {
        celulas.map(item => {

          return (
            <div className='box'>
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
