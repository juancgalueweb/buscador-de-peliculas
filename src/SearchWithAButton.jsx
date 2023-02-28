import { useState } from 'react'
import './App.css'
import { AppWrapper } from './components/AppWrapper'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
export const SearchWithAButton = () => {
  const [sort, setSort] = useState(false)
  const { error, updateSearch, search } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search, sort })

  const handleSubmit = event => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleChange = event => {
    const newSearch = event.target.value
    updateSearch(newSearch)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <AppWrapper>
      <div className='page'>
        <section>
          <h1>Buscador de películas usando un botón</h1>
          <form onSubmit={handleSubmit}>
            <input
              value={search}
              onChange={handleChange}
              name='query'
              type='text'
              placeholder='The Matrix, Die Hard, The Lord of the Rings...'
            />
            <button type='submit'>Buscar</button>
            <input
              type='checkbox'
              onChange={handleSort}
              checked={sort}
              id='sort-films'
            />
            <label htmlFor='sort-films'>Ordenar alfabéticamente</label>
          </form>
          <p style={{ color: 'red' }}>{error}</p>
        </section>
        <main>{loading ? <p>Cargando...</p> : <Movies movies={movies} />}</main>
      </div>
    </AppWrapper>
  )
}
