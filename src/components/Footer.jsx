import { IoLogoReact } from 'react-icons/io5'

const Footer = () => {
  return (
    <footer className='fixed left-4 bottom-4 bg-gray-800 py-2 px-6 rounded-3xl opacity-95 backdrop-blur text-slate-100'>
      <h4 className='flex items-center'>
        Practicando React <IoLogoReact className='inline ml-2 text-[#5ED4F3]' />
      </h4>
      <h5>
        Gracias{' '}
        <a
          href='https://github.com/midudev/aprendiendo-react'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:underline hover:underline-offset-4'
        >
          @midudev
        </a>
      </h5>
    </footer>
  )
}

export default Footer
