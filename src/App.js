import React, {useState, useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import './App.css';

function App() {
  const  [pokemon, setPokemon] = useState([]);
  const [show, setShowPokemon] = useState(false);
  
  useEffect(() => {
    if (show) {
      axios.get("https://pokeapi.co/api/v2/pokemon/?limit=807")
        .then(res => {setPokemon(res.data.results)})
    }
  }, [show]);
  
    const showPoke = (e) => {
      show === false ? setShowPokemon(true) : setShowPokemon(false);
    }

  
  return (
    <div className="App">
      <button 
      className="m-2 btn btn-outline-info"
      onClick={(e) => showPoke(e)}
      >
        Grab a pokemon
      </button>
      <div>
        {
          show === true ?
            pokemon.length > 0 && pokemon.map((poke, index) => {
              return (<li className="m2" key={index}>{poke.name}</li>)
            })
            :
            <div className="m-4">
              <p className="m-2"></p>
            </div>
        }
      </div>
  </div>
  );
}

export default App;
