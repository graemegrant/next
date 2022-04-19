/** @format */

import Bar from '../components/Bar';
import { languages, tools } from '../data';

const resume = () => {
  return (
    <div className='px-4 py-2'>
      {/* //education & experience */}
      <div className='grid gap-6 md:grid-cols-2'>
        <div>
          <h5 className='my-3 font-bold text-2x1'>Education</h5>
          <div>
            <h5 className='my-2 text-xl font-bold'>Environmental management</h5>
            <p className='font-semibold'>Scottish rural university college</p>
            <p className='my-3'>I am currently employed by...</p>
          </div>
        </div>
        <div>
          <h5 className='my-3 font-bold text-2x1'>Experience</h5>
          <div>
            <h5 className='my-2 text-xl font-bold'>Police Officer</h5>
            <p className='font-semibold'>Police Scotland</p>
            <p className='my-3'>I don't know why I do this job</p>
          </div>
        </div>
      </div>
      {/*Language and Tools */}
      <div className='grid.gap-6.md:grid-cols-2'>
        <div>
          <h5 className='my-3 text-2xl font-bold'>Language & Framework</h5>
          <div>
            {languages.map((language) => (
              <Bar data={language} key={language.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className='my-3 text-2xl font-bold'>Tools and Software</h5>
          <div className='my-2'>
            {tools.map(tool => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default resume;
