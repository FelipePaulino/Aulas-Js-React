import './App.css';

function App() {
const lista = [
    {
      name: "Felipe",
      email: "teste@teste.com.br",
      eLegal: true,
      estadoCivil: "Casado"
    },
    {
      name: "Felipe 2",
      email: "teste@teste.com.br",
      eLegal: false,
      estadoCivil: "Casado"
    },
    {
      name: "Felipe 3",
      email: "teste@teste.com.br",
      eLegal: null,
      estadoCivil: "Casado"
    },
    {
      name: "Felipe 4",
      email: "fpr@teste.com.br",
      eLegal: true,
      estadoCivil: "Casado"
    }
  ]

  const filtrando = lista.filter(itemLista =>{
    return itemLista.email === 'fpr@teste.com.br' 
  })
  



  // Listagem com 4 objetos cada objeto contendo 3 itens diversos, e item boolean
  // só dois sejam true dois vao ser false e exiba os itens que tem esse "false"

  // outra lista que tenha 3 objetos com 3 string e só vão dois item que a string 
  // seja abacaxi 

  console.log(filtrando, 'filtrando')
  return (
    <div className="App">
    {
      filtrando.map(itemLista=>{
        return(
          <p>{itemLista.name}</p>
        )
      })
    }
    </div>
  );
}

export default App;
