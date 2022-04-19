import {AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai'
import { GiTie } from 'react-icons/gi'
import {GoLocation} from 'react-icons/go'

const Sidebar = () => {
  return (
    <div>
      <img src="https://picsum.photos/200/300" 
      alt="avatar"
      className='w-32 h-32 mx-auto rounded-full' 
      />
      <h3 className='my-4 text-3xl font-medium tracking-wider font-kaushan'>
        <span className='text-green'>Graeme </span>
          Grant
        </h3>
        <p className='px-2 py-1 my-3 font-medium bg-gray-200 rounded-full dark:bg-black-500'>
          Web Developer
          </p>
          
          <a className='flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-black-500'
           href=""
           download='name'>
          <GiTie className='w-6 h-6' />
           <span>Download Resume</span>
          </a>
          
       { /* //Social icons */}
          <div className='flex justify-around w-9/12 mx-auto my-5 text-green md:w-full'>
            <a href=''>
              <AiFillGithub className='w-8 h-8 cursor-pointer' />
            </a>
            <a href=''>
              <AiFillLinkedin className='w-8 h-8 cursor-pointer' />
            </a>
            <a href=''>
              <AiFillInstagram className='w-8 h-8 cursor-pointer' />
            </a>
          </div>
       { /* //Address */}
       <div className='py-4 my-5 bg-gray-200' style={{marginLeft: '-1rem', marginRight: '-1rem'}}>
         <div className='flex items-center justify-center space-x-2'>
           <GoLocation/>
           <span>Edinburgh,UK</span>
         </div>
         <p className='my-2'>Graemejgrant@gmail.com</p>
         <p className='my-2'>0777777777777</p>
       </div>
       {/* Email Button */}
       <button 
          className='w-8/12 px-5 py-2 my-2 rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none'
          onClick={() => window.open('mailto:graemejgrant@gmail.com')}>
           Email
        </button>
       <button 
          className='w-8/12 px-5 py-2 my-2 rounded-full bg-gradient-to-r from-green to-blue-400'>Toggle</button>
    </div>
  )
}

export default Sidebar
