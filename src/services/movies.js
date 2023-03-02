const API_KEY = process.env.NEXT_PUBLIC_OMDB_API_KEY

export const searchMovies = async ({ search }) => {
  if (search === '') return null
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`
    )
    const json = await response.json()
    const movies = json.Search

    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
      type: movie.Type
    }))
  } catch (error) {
    throw new Error('Error al buscar las películas')
  }
}
