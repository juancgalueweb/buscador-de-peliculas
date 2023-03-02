import Head from 'next/head'
import Link from 'next/link'
import { AiFillHome } from 'react-icons/ai'

const AppWrapper = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        {description && <meta name='description' content={description} />}
        <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
      </Head>
      <header className='bg-slate-100 h-11 sticky top-0 w-full'>
        <nav className='p-2 text-sm flex justify-center items-center gap-x-12 mb-24'>
          <Link href='/'>
            <AiFillHome className='text-xl' />
          </Link>
          <Link href='/search-with-a-button'>Buscar usando un botón</Link>
          <Link href='/search-while-writing'>Buscar mientras se escribe</Link>
        </nav>
      </header>
      <section className='max-w-3xl mx-auto py-10 min-h-screen px-2'>
        {children}
      </section>
    </>
  )
}

export default AppWrapper
