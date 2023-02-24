import noPoster from '../images/no-movie-poster.jpg'

function ListOfMovies ({ movies }) {
  return (
    <ul className='movies'>
      {movies.map((movie) => (
        <li className='movie' key={movie.id}>
          <div>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
          </div>
          <div>
            {movie.poster === 'N/A'
              ? (
                <img src={noPoster} alt='Movie with no poster available' />
                )
              : (
                <img src={movie.poster} alt={movie.title} />
                )}
          </div>
        </li>
      ))}
    </ul>
  )
}

function NoMoviesResults () {
  return (
    <p>No se ha realizado una búsqueda</p>
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
