import { useEffect, useState } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function App () {
  const { movies } = useMovies()
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    const fields = Object.fromEntries(
      new window.FormData(event.target
      ))
    console.log(fields.query)
  }

  const handleChange = (event) => {
    const newQuery = event.target.value
    setQuery(newQuery)
  }

  useEffect(() => {
    if (query.match(/^\d+$/)) {
      setError('No se puede buscar una película con un número')
      return
    }

    if (query.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres')
      return
    }

    setError(null)
  }, [query])

  return (
    <div className='page'>
      <header>
        <h1>Buscador de películas</h1>
        <form onSubmit={handleSubmit}>
          <input value={query} onChange={handleChange} name='query' type='text' placeholder='The Matrix, Die Hard, The Lord of the Rings...' />
          <button type='submit'>Buscar</button>
        </form>
        <p style={{ color: 'red' }}>{error}</p>
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
