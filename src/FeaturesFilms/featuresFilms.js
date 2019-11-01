import React, {useState, useEffect} from 'react';

export default function FeaturesFilms(props) {
	// const [ films, setFilms ] = useState()
	const [ film, setFilm ] = useState([])
	const [ loading, setLoading ] = useState(true)

	useEffect(()=> {
		console.log(props.films)
		setFilm([])
		props.films.map((urlFilm)=>{
			debugger
			const fetchUrl = async() => {
				await fetch(urlFilm)
					.then(response => response.json())
					.then(data => {
						debugger
						// tryMovie.push(data.title)
						setFilm(prevEffectLogs => [...prevEffectLogs, data.title])
						console.log('blçah:', data.title)
					})
			}
			fetchUrl()
			setLoading(false)
		})

	},[props])
	useEffect(() => {
		console.log(film)
	},[film])
  return (
    <>
			<h3>Features Films</h3>
			<ul>
				{loading ? 'Loading' : ( film.map((movie) => {
					return <li key={movie}>{movie}</li>
				}) )}
			</ul>
    </>
  );
}
