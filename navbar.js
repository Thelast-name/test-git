const Header = () => (
        <div className='flex justify-between bg-sky-500 h-14 items-center'>
        <h2 className='text-2xl text-white px-2'>BlogforME</h2>
        <ul className='flex justify-evenly'>
            <li className='px-2'><a href='#' className='text-white text-base hover:text-cyan-100'>Home</a></li>
            <li className='px-2'><a href='#' className='text-white text-base hover:text-cyan-100'>Project</a></li>
            <li className='px-2'><a href='#' className='text-white text-base hover:text-cyan-100'>About</a></li>
        </ul>
    </div>
  )
  
  export default Header