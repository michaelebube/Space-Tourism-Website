import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar_Dest = ({ selectedResource, handleClick }) => {
  return (
    <>
      <div className=' xs:flex sm:pl-28 md:pl-24 xl:pl-[250px] sm:h-[80px] md:h-[90px] lg:h-[20px] sm:w-[700px] md:w-[750px] lg:w-[100px] font-barlow font-semibold bg-transparent xs:text-lg sm:text-[20px] lg:text-lg xl:text-[26px] text-secColor/50'>
        <ul className='flex space-x-5 sm:space-x-10 lg:space-x-5 xl:space-x-8'>
          <li>
            <NavLink
              to="/destination"
              className={`relative sm:pb-[31px] lg:pb-2 ${
                selectedResource.title === 'MOON' 
                  ? 'after:block after:w-full after:h-[2px] after:bg-white after:absolute after:-bottom-[6px] sm:after:bottom-6 md:after:bottom-6 lg:after:bottom-0'
                  : 'hover:after:block hover:after:w-full hover:after:h-[2px] hover:after:bg-white hover:after:bg-opacity-50 hover:after:absolute hover:after:-bottom-[6px] sm:hover:after:bottom-6 md:hover:after:bottom-6 lg:hover:after:bottom-0'
              }` }
              onClick={() => handleClick('Moon')}
            >
              MOON
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/destination"
              className={`relative sm:pb-[31px] lg:pb-2 ${
                selectedResource.title === 'MARS' 
                  ? 'after:block after:w-full after:h-[2px] after:bg-white after:absolute after:-bottom-[6px] sm:after:bottom-6  md:after:bottom-6 lg:after:bottom-0'
                  : 'hover:after:block hover:after:w-full hover:after:h-[2px] hover:after:bg-white hover:after:bg-opacity-50 hover:after:absolute hover:after:-bottom-[6px] sm:hover:after:bottom-6 md:hover:after:bottom-6 lg:hover:after:bottom-0'
              }`}
              onClick={() => handleClick('Mars')}
            >
              MARS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/destination"
              className={`relative sm:pb-[31px] lg:pb-2 ${
                selectedResource.title === 'EUROPA' 
                  ? 'after:block after:w-full after:h-[2px] after:bg-white after:absolute after:-bottom-[6px] sm:after:bottom-6  md:after:bottom-6 lg:after:bottom-0'
                  : 'hover:after:block hover:after:w-full hover:after:h-[2px] hover:after:bg-white hover:after:bg-opacity-50 hover:after:absolute hover:after:-bottom-[6px] sm:hover:after:bottom-6 md:hover:after:bottom-6  lg:hover:after:bottom-0'
              }`}
              onClick={() => handleClick('Europa')}
            >
              EUROPA
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/destination"
              className={`relative sm:pb-[31px] lg:pb-2 ${
                selectedResource.title === 'TITAN' 
                  ? 'after:block after:w-full after:h-[2px] after:bg-white after:absolute after:-bottom-[6px] sm:after:bottom-6  md:after:bottom-6 lg:after:bottom-0'
                  : 'hover:after:block hover:after:w-full hover:after:h-[2px] hover:after:bg-white hover:after:bg-opacity-50 hover:after:absolute hover:after:-bottom-[6px] sm:hover:after:bottom-6 md:hover:after:bottom-6 lg:hover:after:bottom-0'
              }`}
              onClick={() => handleClick('Titan')}
            >
              TITAN
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar_Dest;
