import imagenAves from './img/ave-chiricoca.jpg';
import './App.css';
import {useState} from "react"
import Aves from './components/Aves';

function App() {

  const [aves, setAves] = useState(null); 

  const reqApi = async () => {
    const api = await fetch('https://aves.ninjas.cl/api/birds')
    const data = await api.json();
    setAves(data)
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Aves de Chile</h1>
        {aves ? (
          <Aves aves={aves} setAves={setAves} />
        ):
        (
          <>
          <img src={imagenAves} className="img-home" alt="Aves de Chile" />
          <button onClick={reqApi} className="btn-search">Buscar Aves</button>
          </>
        )
        }
      </header>
    </div>
  );
}

export default App;
