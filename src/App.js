import React, { useState, useEffect} from 'react'
import CardPlanet from './CardPlanet/cardPlanet'
import FeatureFilms from './FeaturesFilms/featuresFilms'
import './App.css';

function App() {
  const [ loading, setLoading ] = useState(true)
  const [ planets, setPlanets ] = useState()
  const [ planet, setPlanet ] = useState()

  useEffect(() => { 
    const fetchUrl = async() => {
			const usersResponse = await fetch(`https://swapi.co/api/planets/`);
			const jsonPlanets = await usersResponse.json();
      console.log(jsonPlanets.results)

      setPlanets(jsonPlanets.results)
      setPlanet(jsonPlanets.results[0])
      setLoading(false)
		}
		fetchUrl()
  },[])
  
  function randomPlanet() {
    let choosePlanet = planets[Math.floor(Math.random()*planets.length)];
    debugger
    console.log('tag', choosePlanet)
    setPlanet(choosePlanet)
  }

  return (
    <div id="App">
      <h1 className="title"> Star Wars Planets </h1>
      <div className="jumbotron" >
        {loading ? 'Loading' : ( 
          <>
            <CardPlanet planet={planet} />
            <hr />
            <FeatureFilms films={planet.films}/>
          </>
        )}
      </div>
      <div className="container">
      <div class="row justify-content-md-center">
        <div class="col-md-auto">
          <button className="btn btn-success btn-lg" onClick={randomPlanet}>Next Planet</button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
