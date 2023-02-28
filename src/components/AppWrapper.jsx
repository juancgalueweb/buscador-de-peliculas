import { AiFillHome } from 'react-icons/ai'
import '../App.css'

export const AppWrapper = ({ children }) => {
  return (
    <>
      <header className='app-header'>
        <nav className='navbar'>
          <a href='/'>
            <AiFillHome className='home-link' />
          </a>
          <a href='/search-with-a-button'>Buscar usando un botón</a>
          <a href='/search-while-writing'>Buscar mientras se escribe</a>
        </nav>
      </header>
      <section>{children}</section>
    </>
  )
}
