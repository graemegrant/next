import ServiceCard from '../components/ServiceCard'
import { services } from '../data'

const index = () => {
  return (
    <div className='flex-col flex-grow px-6 pt-1'>
      <h5>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</h5>
      <div className='flex-grow p-4 mt-5 bg-gray-400' style={{marginLeft: '-1.5rem', marginRight: '-1.5rem'}}>
        <h6 className='my-3 text-xl font-bold tracking-wide'>What I Offer</h6>
        <div className='grid gap-6 lg:grid-cols-2'>
          {services.map(service => (
              <div className='bg-gray-200 rounded lg:col-span-1'><ServiceCard service={service} /></div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default index

// export const getServerSideProps = async (
 // context: GetServerSIDEpROPScONTEXT
 // ) =>
 // const res = await fetch('http://localhost:3000/api/services')
 // const data = await res.json()

 // console.log('SERVER', services)

 // return {
 //  props: {
//    services: data.services,
//    },
//   }
//  }
 