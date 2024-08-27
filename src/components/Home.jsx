import React from 'react';
import BgDesk from '../assets/home/background-home-desktop.jpg';
import BgTablet from '../assets/home/background-home-tablet.jpg';
import BgMobile from '../assets/home/background-home-mobile.jpg';
import Navbar_Home from './Navbar_Home';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative w-screen h-screen">
      {/* Mobile Background and Navbar */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden xs:block"
        style={{ backgroundImage: `url(${BgMobile})` }}
      >
        <Navbar_Home />
      </div>

      {/* Tablet Background and Navbar */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden lg:block md:hidden"
        style={{ backgroundImage: `url(${BgTablet})` }}
      >
        <Navbar_Home />
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
  <button className='text-black lg:text-3xl xl:text-4xl lg:p-20 xl:p-[66px] font-bellefair'>
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
