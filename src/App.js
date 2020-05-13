import React, {useState, useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  const  [pokemon, setPokemon] = useState([]);
  const [show, setShowPokemon] = useState(false);
  
  useEffect(() => {
      fetch("https://pokeapi.co/api/v2/pokemon/?limit=807")
        .then(res => res.json())
        .then(res => setPokemon(res.results))
    }, []);
  
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
            pokemon.length > 0 && pokemon.map((poke, index, ability, id) => {
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
