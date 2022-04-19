<<<<<<< HEAD
/** @format */

import { IProject, IService, } from './types';
import { ISkill } from './types';
import { RiComputerLine } from 'react-icons/ri';
import { FaServer } from 'react-icons/fa';
import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai';
import { MdDeveloperMode } from 'react-icons/md';
import { BsCircleFill } from 'react-icons/bs';
=======
import { IService } from './type'
import { RiComputerLine } from 'react-icons/ri'
import { FaServer } from 'react-icons/fa'
import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai'
import { MdDeveloperMode } from 'react-icons/md'
>>>>>>> parent of 8e70e18 (darkmode & Projects Navbar)

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: 'Frontend Development',
    about:
      'I can based do eiusmod tempor incididunt ut labore et dolore magna aliqua. <b> HTML</b>,CSS and <b>React</b> '
  },
  {
    Icon: FaServer,
    title: 'Backend Development',
    about:
      'handle database, server, api using <b> & other</b> popular frameworks',
  },
  {
    Icon: AiOutlineApi,
    title: 'API Development',
    about:
      'I can develop rebust REST API using <b>consectetur adipiscing elit</b> & <b>node API</b> ',
  },
  {
    Icon: MdDeveloperMode,
    title: 'tech',
    about:
      'I can develop rebust REST API using <b>django-rest-api</b> & <b>node API</b> ',
    },
    {
    Icon: AiOutlineAntDesign,
    title: 'soft skills',
    about:
      'I can develop rebust REST API using <b>Lorem ipsum dolor sit amet, </b> & <b>node API</b> ',
      },
]