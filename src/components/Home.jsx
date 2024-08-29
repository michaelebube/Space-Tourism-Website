import React, {useState} from 'react';
import BgDesk from '../assets/home/background-home-desktop.jpg';
import BgTablet from '../assets/home/background-home-tablet.jpg';
import BgMobile from '../assets/home/background-home-mobile.jpg';
import Navbar_Home from './Navbar_Home';
import { Link } from 'react-router-dom';

const Home = ({isSidebarOpen, toggleSidebar}) => {
 
  return (
    <div className="relative w-screen h-screen">
      {/* Mobile Background and Navbar */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden xs:block"
        style={{ backgroundImage: `url(${BgMobile})` }}
      >
        <Navbar_Home isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
        <div className='flex flex-col items-center justify-center h-sm:-mt-6  h-md:mt-[8px]  pl-9  sm:py-10 relative'>
            <div>
                <h3 className='text-secColor text-[16px] font-bellefair md:ml-2 '>SO, YOU WANT TO TRAVEL TO</h3>
                <h1 className='-ml-4 text-[90px] text-white -mt-2 tracking-wider'>SPACE</h1>
                <h3 className='w-[290px] text-secColor   text-[16px] leading-loose font-barlow -ml-6 tracking-wide '>Let's face it; if you want to go to space, you might <span className='ml-[2px]'> as well genuinely go to outer space and not hover
                    </span>  <span className='ml-2'>kind of on the edge of it. Well sit back, and relax 
                    </span> <span className='ml-4'>
                        because we'll give you a truly out of this world 
                        </span> <span className='ml-[38%]'>experience!</span> </h3>
            </div>

           <Link to ="/destination">
                <div className='relative flex items-center justify-center border rounded-full h-md:mt-[180px] h-sm:mt-[72px]  -ml-10 bg-white transition-all duration-300 hover:bg-light-gray hover:text-gray-400 hover-shadow-animate'>
  <button className='text-black  h-md:text-[30px] sm:text-[24px] h-sm:text-[24px] h-sm:px-[40px] h-sm:py-[55px]  h-md:px-[50px] h-md:py-[65px] font-bellefair'>
    Explore
  </button>
</div>
            </Link>

        </div>
               {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-0 bg-primaryColor opacity-100 transition-opacity duration-300 ease-in-out"
          onClick={toggleSidebar} // Close sidebar when overlay is clicked
        ></div>
      )}
      </div>

      {/* Tablet Background and Navbar */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden lg:block md:block"
        style={{ backgroundImage: `url(${BgTablet})` }}
      >
        <Navbar_Home />
         <div className='flex flex-col items-center justify-center md:pl-20 lg:gap-[160px] xl:gap-[500px] mt-[40px] xl:px-[180px] lg:px-[12%] relative'>
            <div>
                <h3 className='text-secColor md:text-[20px] lg:text-sm xl:text-[16px] font-bellefair md:ml-2 '>SO, YOU WANT TO TRAVEL TO</h3>
                <h1 className='md:-ml-6 lg:text-[90px] md:text-[120px] text-white md:-mt-8 lg:-mt-4 tracking-wider'>SPACE</h1>
                <h3 className='w-[400px] text-secColor md:text-[16px]  text-[16px] leading-loose font-barlow md:-ml-8 md:-mt-2 '>Let's face it; if you want to go to space, you might as well genuinely go to <span className='md:-ml-[6px]'> outer space and not hover kind of on the edge of it. Well sit back, and relax 
                    </span> <span className='md:ml-8'>
                        because we'll give you a truly out of this world experience!
                        </span> </h3>
            </div>

           <Link to ="/destination">
                <div className='relative flex items-center justify-center border rounded-full mt-12 -ml-10 bg-white transition-all duration-300 hover:bg-light-gray hover:text-gray-400 hover-shadow-animate'>
  <button className='text-black text-[30px] xl:text-4xl px-[65px] py-[80px] font-bellefair'>
    Explore
  </button>
</div>
            </Link>

        </div>
      </div>

      {/* Desktop Background and Navbar */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden lg:block"
        style={{ backgroundImage: `url(${BgDesk})` }}
      >
        <Navbar_Home />
        <div className='flex lg:gap-[160px] xl:gap-[500px] mt-[230px] xl:px-[180px] lg:px-[12%]'>
            <div>
                <h3 className='text-secColor lg:text-sm xl:text-[16px] font-bellefair '>SO, YOU WANT TO TRAVEL TO</h3>
                <h1 className='text-[90px] text-white -mt-4 tracking-wider'>SPACE</h1>
                <h3 className='w-[400px] text-secColor text-[16px] leading-loose font-barlow '>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</h3>
            </div>

           <Link to ="/destination">
                <div className='relative flex items-center justify-center border rounded-full xl:w-[250px] xl:h-[250px] bg-white transition-all duration-300 hover:bg-light-gray hover:text-gray-400 hover-shadow-animate'>
  <button className='text-black lg:text-[22px] xl:text-4xl lg:p-[90px] xl:p-[66px] font-bellefair'>
    Explore
  </button>
</div>
            </Link>

        </div>

        
      </div>
    </div>
  );
};

export default Home;
