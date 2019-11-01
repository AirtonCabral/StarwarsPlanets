import React from 'react';


export default function CardPlanet(props) {
  return (
    <>
			<h2>{props.planet.name}</h2>
			<hr />
			<p> Population: {props.planet.population} </p>
			<p> Climate: {props.planet.climate}  </p>
			<p> Terrain: {props.planet.terrain}  </p>			
    </>
  );
}

