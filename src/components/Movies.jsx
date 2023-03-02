import Image from 'next/image'
import noPoster from 'public/no-movie-poster.jpg'
import { BiCameraMovie } from 'react-icons/bi'
import { FaGamepad } from 'react-icons/fa'
import { GiFilmStrip } from 'react-icons/gi'

function ListOfMovies({ movies }) {
  return (
    <ul className='list-none m-0 p-0 grid w-full grid-cols-fluid gap-8'>
      {movies.map(movie => (
        <li
          className='text-center flex flex-col justify-between'
          key={movie.id}
        >
          <div>
            {movie.poster === 'N/A' ? (
              <Image
                src={noPoster}
                alt='Movie with no poster available'
                placeholder='blur'
                className='rounded-lg mt-4 self-end'
                width={300}
                height={443}
              />
            ) : (
              <Image
                src={movie.poster}
                alt={movie.title}
                className='rounded-lg mt-4 self-end'
                width={300}
                height={443}
              />
            )}
          </div>
          <div className='mt-2'>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            {movie.type === 'movie' ? (
              <div className='flex justify-center items-center'>
                <p>Type: {movie.type}</p>
                <BiCameraMovie className='ml-[10px] text-[#777] text-lg' />
              </div>
            ) : movie.type === 'series' ? (
              <div className='flex justify-center items-center'>
                <p>Type: {movie.type}</p>
                <GiFilmStrip className='ml-[10px] text-[#777] text-lg' />
              </div>
            ) : movie.type === 'game' ? (
              <div className='flex justify-center items-center'>
                <p>Type: {movie.type}</p>
                <FaGamepad className='ml-[10px] text-[#777] text-lg' />
              </div>
            ) : (
              <p>Type: {movie.type}</p>
            )}
          </div>
        </li>
      ))}
    </ul>
  )
}

function NoMoviesResults() {
  return (
    <div
      className='p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50'
      role='alert'
    >
      No hay resultados para esta búsqueda
    </div>
  )
}

export function Movies({ movies }) {
  const hasMovies = movies?.length > 0
  return hasMovies ? <ListOfMovies movies={movies} /> : <NoMoviesResults />
}
