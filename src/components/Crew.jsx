import React, {useState} from 'react'
import BgMobile from '../assets/crew/background-crew-mobile.jpg'
import BgTablet from '../assets/crew/background-crew-tablet.jpg'
import BgDesk from '../assets/crew/background-crew-desktop.jpg'
import { CrewData } from '../CrewData'
import Navbar_Home from './Navbar_Home'

import Nav_Crew from './Nav_Crew'

const Crew = ({isSidebarOpen, toggleSidebar}) => {

     const [selectedResource, setSelectedResource] = useState(CrewData['Crew1'])

    const handleClick = (resourceKey) => {
        setSelectedResource(CrewData[resourceKey])
    }

  return (
   <>
    <div className="relative w-screen h-screen">

        {/* Mobile Background and Navbar */}
    <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat block sm:hidden"
        style={{ backgroundImage: `url(${BgMobile})` }}
      >
        <Navbar_Home isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

         <div className='flex flex-col -mt-[40px]  '>
            <div className='font-barlow text-[28px] text-center  -ml-4 text-white'><span className='text-white/20 mr-2 xl:mr-4'>02</span>
                <span className='lg:tracking-wider'>MEET YOUR CREW</span></div>

            <div className='flex-col mt-[90px] md:mt-[60px] ml-[28%] md:ml-[23%]      '>
             

              <div className='space-y-[2px] flex-col  items-center '>

               
                <h1 className='-mt-[34px] xl:mt-1 text-[25px] text-secColor/70 font-bellefair -ml-[120px]  text-center   '>
                    {selectedResource.title}
                </h1>

                <h1 className='text-white  text-[32px] font-bellefair text-center -ml-[120px] '>
                    {selectedResource.name}
                </h1>
                <div className='flex -ml-[120px]  justify-center items-center pt-6'>
                     <p className='  w-[360px] xl:w-[470px] text-lg font-barlow text-center  text-secColor/70  '>
                    {selectedResource.profile}
                </p>
                </div>
               

                <div className=' pt-8 flex justify-center -ml-[120px] ' >
                    <Nav_Crew handleClick={handleClick} selectedResource={selectedResource} />
                </div>
            </div>
            
            <div className='relative mx-auto   '>
                <div className='relative'>
                    <img src={selectedResource.img} alt="" className=' mt-[85px]  w-[360px] h-[350px] -ml-[19%]'/>
                    <div className="absolute inset-0 top-[55%] bg-gradient-to-b from-transparent to-primaryColor -ml-[19%]"></div>
                </div>
              
              </div>
             
            </div>
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
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden sm:block"
        style={{ backgroundImage: `url(${BgTablet})` }}
      >
        <Navbar_Home isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

         <div className='flex flex-col -mt-5  '>
            <div className='font-barlow sm:text-2xl  md:text-[26px] sm:ml-10 text-white'><span className='text-white/20 mr-2 xl:mr-4'>02</span>
                <span className='lg:tracking-wider'>MEET YOUR CREW</span></div>

            <div className='flex-col sm:mt-[90px] md:mt-[60px] sm:ml-[28%] md:ml-[23%]      '>
             

              <div className='space-y-[1px] flex-col  items-center '>

               
                <h1 className='-mt-[34px] xl:mt-1 text-[25px] text-secColor/70 font-bellefair -ml-[220px]  text-center   '>
                    {selectedResource.title}
                </h1>

                <h1 className='text-white  text-[40px] font-bellefair text-center -ml-[220px]'>
                    {selectedResource.name}
                </h1>
                <div className='flex -ml-[220px] justify-center items-center'>
                     <p className='  w-[460px] xl:w-[470px] text-lg ml- font-barlow text-center  text-secColor/70  '>
                    {selectedResource.profile}
                </p>
                </div>
               

                <div className=' pt-6 flex justify-center -ml-[240px] ' >
                    <Nav_Crew handleClick={handleClick} selectedResource={selectedResource} />
                </div>
            </div>
            
            <div className='relative mx-auto md:pl-[6px] '>
                <div className='relative'>
                    <img src={selectedResource.img} alt="" className=' my-[50px] xl:-mt-[65px]  md:w-[325px] md:h-[250px] sm:w-[300px] sm:h-[240px] sm:ml-[0.15em] md:ml-[8%]' />
                    <div className="absolute inset-0 top-[55%] bg-gradient-to-b from-transparent to-primaryColor"></div>
                </div>
              
              </div>
             
            </div>
        </div>
      </div>

    
     {/* Desktop Background and Navbar */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden lg:block"
        style={{ backgroundImage: `url(${BgDesk})` }}
      >
        <Navbar_Home isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

         <div className='flex flex-col mt-[2px] xl:-mt-4   xl:pl-[180px] lg:pl-[14%] '>
            <div className='font-barlow lg:text-[26px] xl:text-[34px] text-white'><span className='text-white/20 mr-2 xl:mr-4'>02</span>
                <span className='lg:tracking-wider'>MEET YOUR CREW</span></div>

            <div className='flex lg:gap-20  xl:gap-[280px]  mt-[90px]  xl:mt-[100px]   '>
             

              <div className='flex flex-col space-y-[1px] '>

               
                <h1 className='mt-2 xl:mt-1 lg:text-[24px] xl:text-[26px] text-secColor/70 font-bellefair   '>
                    {selectedResource.title}
                </h1>

                <h1 className='text-white  text-[36px] font-bellefair'>
                    {selectedResource.name}
                </h1>
                <p className='  w-[380px] xl:w-[470px] text-[17px] xl:text-[21px] xl:-mt-5 font-barlow text-secColor/70  '>
                    {selectedResource.profile}
                </p>

                <div className='lg:pt-[170px] xl:pt-[160px] ' >
                    <Nav_Crew handleClick={handleClick} selectedResource={selectedResource} />
                </div>
            </div>
            
            <div className='relative'>
                <img src={selectedResource.img} alt="" className='-mt-14 xl:-mt-[65px]  w-[400px] h-[450px] xl:w-[450px] xl:h-[480px]' />
                <div className="absolute inset-0 rounded-sm top-[75%] bg-gradient-to-b from-transparent to-primaryColor/90"></div>
              </div>
             
            </div>
        </div>
      </div>

       
    </div>
   </>
  )
}

export default Crew