import AppWrapper from '@/components/AppWrapper'
import { Movies } from '@/components/Movies'
import { useMovies } from '@/hooks/useMovies'
import { useSearch } from '@/hooks/useSearch'
import { useState } from 'react'

const SearchWithAButton = () => {
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
    if (movies === undefined || movies === null || movies.length === 0) return
    setSort(!sort)
  }

  return (
    <AppWrapper
      title='Buscar pelis por botón'
      description='Permite la búsqueda de las películas haciendo click en el botón de búsqueda'
    >
      <div className='flex flex-col justify-center'>
        <section>
          <h1 className='text-center'>Buscador de películas usando un botón</h1>
          <form
            onSubmit={handleSubmit}
            className='flex justify-center items-center my-8'
          >
            <input
              value={search}
              onChange={handleChange}
              name='query'
              type='text'
              placeholder='The Matrix, Die Hard, The Lord of the Rings...'
              className='w-96 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5'
            />
            <button
              type='submit'
              className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mx-2 focus:outline-none'
            >
              Buscar
            </button>
            <input
              type='checkbox'
              onChange={handleSort}
              checked={sort}
              id='sort-films'
              className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2'
            />
            <label
              htmlFor='sort-films'
              className='ml-2 text-sm font-medium text-gray-900'
            >
              Ordenar alfabéticamente
            </label>
          </form>
          <p className='text-red-600 mb-4 text-center'>{error}</p>
        </section>
        <main className='flex justify-center w-full'>
          {loading ? <p>Cargando...</p> : <Movies movies={movies} />}
        </main>
      </div>
    </AppWrapper>
  )
}

export default SearchWithAButton
