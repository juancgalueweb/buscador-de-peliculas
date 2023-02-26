import { BiCameraMovie } from 'react-icons/bi'
import { FaGamepad } from 'react-icons/fa'
import { GiFilmStrip } from 'react-icons/gi'
import noPoster from '../images/no-movie-poster.jpg'

function ListOfMovies ({ movies }) {
  return (
    <ul className='movies'>
      {movies.map((movie) => (
        <li className='movie' key={movie.id}>
          <div>
            {movie.poster === 'N/A'
              ? (
                <img src={noPoster} alt='Movie with no poster available' />
                )
              : (
                <img src={movie.poster} alt={movie.title} />
                )}
          </div>
          <div>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            {movie.type === 'movie'
              ? (
                <div className='movie-type'>
                  <p>{movie.type}</p>
                  <BiCameraMovie className='movie-icons' />
                </div>)
              : movie.type === 'series'
                ? (
                  <div className='movie-type'>
                    <p>{movie.type}</p>
                    <GiFilmStrip className='movie-icons' />
                  </div>
                  )
                : (
                  <div className='movie-type'>
                    <p>{movie.type}</p>
                    <FaGamepad className='movie-icons' />
                  </div>
                  )}
          </div>
        </li>
      ))}
    </ul>
  )
}

function NoMoviesResults () {
  return (
    <p>No hay resultados para esta búsqueda</p>
  )
}

export function Movies ({ movies }) {
  const hasMovies = movies?.length > 0
  return (
    hasMovies
      ? <ListOfMovies movies={movies} />
      : <NoMoviesResults />
  )
}
