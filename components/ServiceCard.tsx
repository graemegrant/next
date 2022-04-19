import { FunctionComponent } from "react"
import { IService } from "../type"

<<<<<<< HEAD
import { FunctionComponent } from 'react';
import { IService } from '../types';

const ServiceCard: FunctionComponent<{ service: IService }> = ({
  service: { Icon, about, title },
=======
const ServiceCard:FunctionComponent<{service: IService }> = ({
  service: { Icon, about, title},
>>>>>>> parent of 8e70e18 (darkmode & Projects Navbar)
}) => {

  const createMarkup = ()=>{
    return {
      __html:about,
    }
  }
  return (
    <div className="flex p-2 space-x-4 item-center">
      <Icon className="w-12 h-12 text-green" />
      <div>
      <h4 className="font-bold">{title}</h4>
      <p dangerouslySetInnerHTML={createMarkup()} />
    </div>
    </div>
  )
}

export default ServiceCard
