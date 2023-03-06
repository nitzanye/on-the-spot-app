import Link from 'next/link'

const Footer = () => {
  const now = new Date();

  return (
    <footer className='z-10 bg-stone-300 py-4 text-center text-white'>
      <div className='container'>
        <p className='text-sm uppercase'>{`@${now.getFullYear()} On-The-Spot App. All rights reserved`}</p>
        <div className=' ml-auto mr-auto flex justify-center gap-8'>
          <ul className='ml-auto  mr-auto flex justify-center flex-col gap-1'>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/about'>About</Link>
            </li>
          </ul>
          <ul className='ml-auto mr-auto flex justify-center flex-col gap-1'>
              <Link href='/signin'>Sign In</Link>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer