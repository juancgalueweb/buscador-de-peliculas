import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AiFillHome } from 'react-icons/ai'

const AppWrapper = ({ children, title, description }) => {
  const { pathname } = useRouter()
  const inactiveLink =
    'text-gray-800 hover:underline hover:underline-offset-4 hover:text-black'
  const activeLink =
    'text-gray-800 hover:underline hover:underline-offset-4 hover:text-black underline underline-offset-4'

  return (
    <>
      <Head>
        <title>{title}</title>
        {description && <meta name='description' content={description} />}
        <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
      </Head>
      <nav className='sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-70 bg-slate-100 border-b w-full'>
        <div className='flex items-center justify-center gap-x-12 h-11'>
          <Link href='/'>
            <AiFillHome className='text-gray-800 text-xl' />
          </Link>
          <Link
            href='/search-with-a-button'
            className={
              pathname === '/search-with-a-button' ? activeLink : inactiveLink
            }
          >
            Buscar usando un botón
          </Link>
          <Link
            href='/search-while-writing'
            className={
              pathname === '/search-while-writing' ? activeLink : inactiveLink
            }
          >
            Buscar mientras se escribe
          </Link>
        </div>
      </nav>
      <section className='max-w-3xl mx-auto py-10 min-h-screen px-2'>
        {children}
      </section>
    </>
  )
}

export default AppWrapper
