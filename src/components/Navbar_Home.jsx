import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; 
import Logo from '../assets/shared/logo.svg'; 

const Navbar_Home = ({isSidebarOpen, toggleSidebar}) => {
 

  return (
    <>
      <div className='relative flex justify-between lg:items-center w-screen h-[135px] gap-1'>
       
        <div className='sm:px-8  md:pr-[2%] md:pt-2 md:pl-[50%] flex justify-center md:gap-0   gap-6 xs:pl-7  '>
          <img 
            src={Logo}
            alt="website logo"
            className='xs:w-10 xs:h-10 sm:w-[45px] sm:h-[45px] md:w-[72px] md:h-[100px]  lg:h-[120px] lg:w-[80px] xl:h-[130px] xl:w-[100px] xs:mt-6  sm:mt-[60%]   lg:mb-4 xl:ml-6 md:ml-[50%]'
          />
          <div className='absolute hidden xl:block lg:hidden h-[1px] bg-white opacity-50' style={{ width: 'calc(40% + 5px)', left: '180px', top: '50%' }}></div>
          <div className='absolute hidden lg:block xl:hidden h-[1px] bg-white opacity-50' style={{ width: 'calc(20% + 5px)', left: '150px', top: '50%' }}></div>
        </div>

        {/* Hamburger Menu for xs screens */}
        <div className='sm:hidden'>
          <button onClick={toggleSidebar} className='text-white text-3xl p-6 '>
            {isSidebarOpen ? undefined : <FaBars />}
          </button>
        </div>

        {/* Navbar Links for larger screens */}
        <div className='hidden sm:flex sm:pl-28 md:pl-24 lg:pl-32 p-4 xl:pl-[120px] items-center sm:h-[80px] md:h-[90px] lg:h-[65px] sm:w-[700px] md:w-[750px] lg:w-[750px] font-barlow font-semibold bg-white bg-opacity-10 sm:text-[17px] md:text-[22px] lg:text-[22px] text-white'>
          <ul className='flex sm:space-x-10 lg:space-x-12 xl:space-x-12'>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "relative sm:pb-[31px] lg:pb-5 after:block after:w-full after:h-[4px] after:bg-white after:absolute after:bottom-0"
                    : "relative sm:pb-[31px] lg:pb-5 hover:after:block hover:after:w-full hover:after:h-[2px] hover:after:bg-white hover:after:bg-opacity-50 hover:after:absolute hover:after:bottom-0"
                }
              >
                00 HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/destination"
                className={({ isActive }) =>
                  isActive
                    ? "relative sm:pb-[31px] lg:pb-5 after:block after:w-full after:h-[2px] after:bg-white after:absolute after:bottom-0"
                    : "relative sm:pb-[31px] lg:pb-5 hover:after:block hover:after:w-full hover:after:h-[2px] hover:after:bg-white hover:after:bg-opacity-50 hover:after:absolute hover:after:bottom-0"
                }
              >
                01 DESTINATION
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/crew"
                className={({ isActive }) =>
                  isActive
                    ? "relative sm:pb-[31px] lg:pb-5 after:block after:w-full after:h-[2px] after:bg-white after:absolute after:bottom-0"
                    : "relative sm:pb-[31px] lg:pb-5 hover:after:block hover:after:w-full hover:after:h-[2px] hover:after:bg-white hover:after:bg-opacity-50 hover:after:absolute hover:after:bottom-0"
                }
              >
                02 CREW
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/technology"
                className={({ isActive }) =>
                  isActive
                    ? "relative sm:pb-[31px] lg:pb-5 after:block after:w-full after:h-[2px] after:bg-white after:absolute after:bottom-0"
                    : "relative sm:pb-[31px] lg:pb-5 hover:after:block hover:after:w-full hover:after:h-[2px] hover:after:bg-white hover:after:bg-opacity-50 hover:after:absolute hover:after:bottom-0"
                }
              >
                03 TECHNOLOGY
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Sidebar for xs screens */}
     <div
  className={`z-10 fixed top-0 right-0 w-[100%] h-full bg-primaryColor bg-opacity-15 text-white transform ${
    isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
  } transition-transform duration-300 ease-in-out md:hidden`}
>
  <div className='absolute right-5 top-5'>
    <FaTimes onClick={toggleSidebar} className='h-10 w-10' />
  </div>
  <ul className='flex flex-col pl-10 mt-[120px] space-y-12 text-2xl'>
    <li className="relative flex items-center">
      <NavLink 
        onClick={toggleSidebar} 
        exact 
        to="/" 
        className={({ isActive }) => 
          isActive 
            ? "pr-8 after:block after:absolute after:w-[6px] after:h-full after:bg-white after:right-0 after:top-0"
            : " pr-8 hover:after:block hover:after:absolute hover:after:w-[6px] hover:after:h-full hover:after:bg-opacity-50 hover:after:bg-white hover:after:right-0 hover:after:bottom-0"
        }
      >
        00 HOME
      </NavLink>
    </li>
    <li className="relative flex items-center">
      <NavLink 
        onClick={toggleSidebar} 
        to="/destination" 
        className={({ isActive }) => 
          isActive 
            ? "pr-8 after:block after:absolute after:w-[6px] after:h-full after:bg-white after:right-0 after:top-0"
            : " pr-8 hover:after:block hover:after:absolute hover:after:w-[6px] hover:after:h-full hover:after:bg-opacity-50 hover:after:bg-white hover:after:right-0 hover:after:bottom-0"
        }
      >
        01 DESTINATION
      </NavLink>
    </li>
    <li className="relative flex items-center">
      <NavLink 
        onClick={toggleSidebar} 
        to="/crew" 
        className={({ isActive }) => 
          isActive 
            ? "pr-8 after:block after:absolute after:w-[6px] after:h-full after:bg-white after:right-0 after:top-0"
            : " pr-8 hover:after:block hover:after:absolute hover:after:w-[6px] hover:after:h-full hover:after:bg-opacity-50 hover:after:bg-white hover:after:right-0 hover:after:bottom-0"
        }
      >
        02 CREW
      </NavLink>
    </li>
    <li className="relative flex items-center">
      <NavLink 
        onClick={toggleSidebar} 
        to="/technology" 
        className={({ isActive }) => 
          isActive 
            ? "pr-8 after:block after:absolute after:w-[6px] after:h-full after:bg-white after:right-0 after:top-0"
            : " pr-8 hover:after:block hover:after:absolute hover:after:w-[6px] hover:after:h-full hover:after:bg-opacity-50 hover:after:bg-white hover:after:right-0 hover:after:bottom-0"
        }
      >
        03 TECHNOLOGY
      </NavLink>
    </li>
  </ul>
</div>

     
    </>
  );
};

export default Navbar_Home;
