import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Secao from './components/Secao';

function App() {

  const mostrar = false
  const textoHeader = 'esse é o titulo do header'

  // vai fazer 4 cards que usem o mesmo compponente porem mostre textos diferentes
  // mostrar 2 links que consomem o mesmo componente que vai ser passado um boleano por props, se
  // eu passar true exibe o link, se eu passar false ou não passar nada, não exibe o link
  return (
    <div className="App">
      <Header textoHeader={textoHeader} />
      <Secao texto={'esse é o texto da seção 1'} />
      <Secao texto={'esse é o texto da seção 2'}/>
      <Footer />
    </div>
  );
}

export default App;
