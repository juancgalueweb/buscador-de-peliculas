import { searchMovies } from '@/services/movies'
import { useCallback, useMemo, useRef, useState } from 'react'

export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const previousSearch = useRef(search)

  /**
   * El useCallback hace lo mismo que el useMemo,
   * pero está pensado solo para funciones
   * */
  const getMovies = useCallback(async ({ search }) => {
    if (search === previousSearch.current) return

    try {
      setLoading(true)
      previousSearch.current = search
      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
    } catch (error) {
      throw new Error('Error al buscar las películas')
    } finally {
      // Se ejecuta luego del try y del catch
      setLoading(false)
    }
  }, [])

  /**
   * Solo ejecuta la función cuando cambia el sort o movies.
   * De resto, guarda la función en la variable sortedMovies
   * */
  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])

  return { movies: sortedMovies, getMovies, loading }
}
