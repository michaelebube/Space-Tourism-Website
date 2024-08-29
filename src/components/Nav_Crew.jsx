import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav_Crew = ({ selectedResource, handleClick }) => {
  const isSelected = (title) => selectedResource.title === title;

  return (
    <div className='flex items-center'>
      <div className='flex gap-4'>
        <ul className='flex space-x-4 '>
          <li>
            <NavLink
              to="/crew"
              className="relative"
              onClick={() => handleClick('Crew1')}
            >
              <div
                className={` xs:w-[10px] xs:h-[10px] lg:w-3 lg:h-3   rounded-full ${
                  isSelected('COMMANDER') ? 'bg-white' : 'bg-gray-600 hover:bg-gray-400'
                } transition-all duration-300 ease-in-out`}
              ></div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/crew"
              className="relative"
              onClick={() => handleClick('Crew2')}
            >
              <div
                className={` xs:w-[10px] xs:h-[10px] lg:w-3 lg:h-3  rounded-full ${
                  isSelected('MISSION SPECIALIST')
                    ? 'bg-white'
                    : 'bg-gray-600 hover:bg-gray-400'
                } transition-all duration-300 ease-in-out`}
              ></div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/crew"
              className="relative"
              onClick={() => handleClick('Crew3')}
            >
              <div
                className={`xs:w-[10px] xs:h-[10px] lg:w-3 lg:h-3  rounded-full ${
                  isSelected('PILOT') ? 'bg-white' : 'hover:bg-gray-400 bg-gray-600'
                } transition-all duration-300 ease-in-out`}
              ></div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/crew"
              className="relative"
              onClick={() => handleClick('Crew4')}
            >
              <div
                className={` xs:w-[10px] xs:h-[10px] lg:w-3 lg:h-3  rounded-full ${
                  isSelected('FLIGHT ENGINEER')
                    ? 'bg-white'
                    : 'hover:bg-gray-400 bg-gray-600'
                } transition-all duration-300 ease-in-out`}
              ></div>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav_Crew;
