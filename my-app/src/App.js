import './App.css';

function App() {
  // MAP SEMPRE EM USADO PARA TRAZER DADOS DE UM ARRAY []
  const celulas = [
    {
      lider: "Fulano",
      lider2: "Fulano",
      lider3: "Fulano",
      membros: [
        {
          esporte: "Futebol",
          t: "bla"
        },
        {
          esporte: "Basquete",
          t: "bla"
        }
      ]
    },
    {
      lider: "Fulano",
      lider2: "Fulano",
      lider3: "Fulano",
      membros: [
        {
          esporte: "Futebol",
          t: "bla"
        },
        {
          esporte: "Basquete",
          t: "bla"
        }
      ]
    },
  ]

  let ativo = true

  return (
    <div className="App">
      {
        celulas.map(celula => {
          const j = celula.membros.filter(y =>{
            return y.esporte !== "Futebol"
          })
          console.log(j, 'j')
          return (
            <div>
              PRIMEIRAS STRINGS
              <div>{celula.lider}</div>
              <div>{celula.lider2}</div>
              <div>{celula.lider3}</div>
              {
                j.map(k=>{
                  return(
                    <div>
                           <br></br>
                     <div> STRINGS DA LISTA</div>
                   { k.esporte}<br></br>
                   {k.t}
                    </div>
                  )

                })
              }
              <br></br>
            </div>
            
          )
        })
      }
    </div>
  );
}

export default App;
