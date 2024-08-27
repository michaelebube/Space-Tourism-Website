import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; 
import Logo from '../assets/shared/logo.svg'; 

const Navbar_Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className='relative flex justify-between lg:items-center w-screen h-[135px] gap-1'>
       
        <div className='px-10 md:pl-14 flex justify-center lg:items-center md:items-center gap-6'>
          <img
            src={Logo}
            alt="website logo"
            className='xs:w-10 xs:h-10 sm:w-[45px] sm:h-[45px] md:w-16 md:h-16 xs:mt-6 sm:mt-[60%] md:-mt-8 lg:mt-2'
          />
          <div className='absolute hidden xl:block lg:hidden h-[1px] bg-white opacity-50' style={{ width: 'calc(40% + 5px)', left: '180px', top: '50%' }}></div>
          <div className='absolute hidden lg:block xl:hidden h-[1px] bg-white opacity-50' style={{ width: 'calc(20% + 5px)', left: '150px', top: '50%' }}></div>
        </div>

        {/* Hamburger Menu for xs screens */}
        <div className='sm:hidden'>
          <button onClick={toggleSidebar} className='text-white text-3xl p-6'>
            {isSidebarOpen ? undefined : <FaBars />}
          </button>
        </div>

        {/* Navbar Links for larger screens */}
        <div className='hidden sm:flex sm:pl-28 md:pl-24 lg:pl-32 p-4 xl:pl-[120px] items-center sm:h-[80px] md:h-[90px] lg:h-[65px] sm:w-[700px] md:w-[750px] lg:w-[750px] font-barlow font-semibold bg-white bg-opacity-10 md:text-[22px] lg:text-[22px] text-white'>
          <ul className='flex sm:space-x-10 lg:space-x-12 xl:space-x-12'>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "relative sm:pb-[31px] lg:pb-5 after:block after:w-full after:h-[4px] after:bg-white after:absolute after:bottom-0"
                    : "relative pb-2"
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
                    : "relative pb-2"
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
                    : "relative pb-2"
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
                    : "relative pb-2"
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
        className={`fixed top-0 right-0 w-[100%] h-full bg-black bg-opacity-80 text-white transform ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out sm:hidden`}
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
        ? "pr-8 after:block after:absolute after:w-[6px] after:h-full after:bg-white after:right-0 after:bottom-0"
        : "relative pr-8"
    }
  >
    00 HOME
  </NavLink>
  {/* Active line */}
     
</li>

          <li>
            <NavLink onClick={toggleSidebar} to="/destination" className={({ isActive }) =>
                  isActive
                    ? "relative sm:pb-[31px] lg:pb-5 after:block after:w-full after:h-[2px] after:bg-white after:absolute after:bottom-0"
                    : "relative pb-2"
                }>
              01 DESTINATION
            </NavLink>
          </li>
          <li>
            <NavLink onClick={toggleSidebar} to="/crew" cclassName={({ isActive }) =>
                  isActive
                    ? "relative sm:pb-[31px] lg:pb-5 after:block after:w-full after:h-[2px] after:bg-white after:absolute after:bottom-0"
                    : "relative pb-2"
                }>
              02 CREW
            </NavLink>
          </li>
          <li>
            <NavLink onClick={toggleSidebar} to="/technology" className={({ isActive }) =>
                  isActive
                    ? "relative sm:pb-[31px] lg:pb-5 after:block after:w-full after:h-[2px] after:bg-white after:absolute after:bottom-0"
                    : "relative pb-2"
                }>
              03 TECHNOLOGY
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar_Home;
