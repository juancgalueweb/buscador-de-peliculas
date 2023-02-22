import './App.css'

function App () {
  return (
    <div className='page'>
      <header>
        <h1>Buscador de películas</h1>
        <form>
          <input type='text' placeholder='The Matrix, Die Hard...' />
          <button type='submit'>Buscar</button>
        </form>
      </header>
      <main>Aquí irán los resultados</main>
    </div>
  )
}

export default App
