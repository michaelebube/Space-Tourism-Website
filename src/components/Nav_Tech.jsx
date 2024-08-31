import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav_Tech = ({ selectedResource, handleClick }) => {
  const isSelected = (title) => selectedResource.title === title;

  return (
    <div className='flex items-center'>
      <div className='flex  mt-6 xl:mt-3  '>
        <ul className='flex lg:flex-col sm:flex-row lg:space-y-10 space-x-7 sm:space-x-6 md:space-x-10 lg:space-x-0 '>
          <li>
            <NavLink
              to="/technology"
              className="relative"
              onClick={() => handleClick('Launch')}
            >
              <div
                className={` xs:w-[10px] xs:h-[10px] lg:w-[200px] lg:h-[200px] p-5 sm:p-6   md:p-7 xl:p-8 rounded-full text-xl xl:text-2xl ${
                  isSelected('LAUNCH VEHICLE') ? 'bg-white text-primaryColor bg-opacity-100 z-10 ' : ''
                } transition-all duration-300 ease-in-out   flex items-center justify-center
                text-white border  border-white/30
                hover:border-white hover:scale-105`}
              >1</div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/technology"
              className="relative"
              onClick={() => handleClick('SpacePort')}
            >
              <div
                className={` xs:w-[10px] xs:h-[10px] lg:w-10 lg:h-10 p-5 sm:p-6 md:p-7 xl:p-8   rounded-full text-xl xl:text-2xl ${
                  isSelected('SPACEPORT')
                    ? 'bg-white text-primaryColor bg-opacity-100 z-10'
                    : ' '
                } transition-all duration-300 ease-in-out   flex items-center justify-center
                text-white border  border-white/30
                hover:border-white hover:scale-105`}
              >2</div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/technology"
              className="relative"
              onClick={() => handleClick('SpaceCapsule')}
            >
              <div
                className={`xs:w-[10px] xs:h-[10px] lg:w-10 lg:h-10 p-5 sm:p-6 md:p-7 xl:p-8   rounded-full text-xl xl:text-2xl ${
                  isSelected('SPACE CAPSULE') ? 'bg-white text-primaryColor bg-opacity-100 z-10' : ''
                } transition-all duration-300 ease-in-out  flex items-center justify-center border  border-white/30
                hover:border-white hover:scale-105
                 text-white `}
              >3</div>
            </NavLink>
          </li>
         
        </ul>
      </div>
    </div>
  );
};

export default Nav_Tech;
