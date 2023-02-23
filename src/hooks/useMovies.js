import { useRef, useState } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies ({ search }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const previousSearch = useRef(search)

  const getMovies = async () => {
    // Evita consultar de nuevo la API si se busca la misma película
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
  }
  return { movies, getMovies, loading }
}
