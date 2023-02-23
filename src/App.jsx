import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'

function App () {
  const { error, updateSearch, search } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search })

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies()
  }

  const handleChange = (event) => {
    updateSearch(event.target.value)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de películas</h1>
        <form onSubmit={handleSubmit}>
          <input value={search} onChange={handleChange} name='query' type='text' placeholder='The Matrix, Die Hard, The Lord of the Rings...' />
          <button type='submit'>Buscar</button>
        </form>
        <p style={{ color: 'red' }}>{error}</p>
      </header>
      <main>
        {loading ? <p>Cargando...</p> : <Movies movies={movies} />}
      </main>
    </div>
  )
}

export default App
