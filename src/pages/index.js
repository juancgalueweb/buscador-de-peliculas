import AppWrapper from '@/components/AppWrapper'

const Home = () => {
  return (
    <AppWrapper>
      <div className='flex flex-col justify-center'>
        <h1 className='text-center font-bold text-3xl mb-6'>Home</h1>
        <p>
          Esta app te permite buscar películas consultando la API gratis de{' '}
          <a
            href='https://www.omdbapi.com/'
            target='_blank'
            rel='noreferrer'
            className='text-blue-600 hover:underline hover:underline-offset-2'
          >
            OMDB Api
          </a>
          .
        </p>
        <p>
          El código de la app está disponible en mi reposotirio de{' '}
          <a
            href='https://github.com/juancgalueweb/buscador-de-peliculas'
            target='_blank'
            rel='noreferrer'
            className='text-blue-600 hover:underline hover:underline-offset-2'
          >
            Github
          </a>
          .
        </p>
        <p>
          La finalidad de este ejercicio es aprender y practicar los conceptos
          de los hooks de React: <em>useRef</em>, <em>useMemo</em> y{' '}
          <em>useCallback</em>.
        </p>
      </div>
    </AppWrapper>
  )
}

export default Home
