import '../App.css'
import { AppWrapper } from './AppWrapper'

export const Home = () => {
  return (
    <AppWrapper>
      <div className='page'>
        <h1>Home</h1>
        <p>
          Esta app te permite buscar películas consultando la API gratis de {' '}
          <a href='https://www.omdbapi.com/' target='_blank' rel='noreferrer'>
            OMDB Api
          </a>.
        </p>
        <p>
          El código de la app está disponible en mi reposotirio de {' '}
          <a href='https://github.com/juancgalueweb/buscador-de-peliculas' target='_blank' rel='noreferrer'>
            Github
          </a>.
        </p>
        <p>La finalidad de este ejercicio es aprender y practicar los conceptos de los hooks de React: <em>useRef</em>, <em>useMemo</em> y <em>useCallback</em>.</p>
      </div>
    </AppWrapper>
  )
}
