import React, {useState} from 'react'
import TechData from '../TechData'
import BgMobile from '../assets/technology/background-technology-mobile.jpg'
import BgTablet from '../assets/technology/background-technology-tablet.jpg'
import BgDesk from '../assets/technology/background-technology-desktop.jpg'
import Navbar_Home from './Navbar_Home'
import Nav_Tech from './Nav_Tech'


const Technology = ({isSidebarOpen, toggleSidebar}) => {
    const [selectedResource, setSelectedResource] = useState(TechData['Launch'])

    const handleClick = (resourceKey) => {
        setSelectedResource(TechData[resourceKey])
    }

  return (
    <>
         <div className="relative w-screen h-screen">

        {/* Mobile Background and Navbar */}
    <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat xs:block sm:hidden"
        style={{ backgroundImage: `url(${BgMobile})` }}
      >
        <Navbar_Home isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

         <div className='flex flex-col -mt-[40px]  '>
            <div className='font-barlow text-[28px] text-center  -ml-4 text-white'><span className='text-white/20 mr-2 xl:mr-4'>02</span>
                <span className='lg:tracking-wider'>SPACE LAUNCH 101</span></div>

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
               

               
            </div>
            
            <div className='relative mx-auto   '>
                <div className='relative'>
                    <img src={selectedResource.img} alt="" className=' mt-[85px]  w-[360px] h-[350px] -ml-[19%]'/>
                    <div className="absolute inset-0 top-[65%] bg-gradient-to-b from-transparent to-primaryColor -ml-[19%]"></div>
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
            <div className='font-barlow sm:text-2xl  md:text-[26px] sm:ml-10 text-white'><span className='text-white/20 mr-2 xl:mr-4'>03</span>
                <span className='lg:tracking-wider'>SPACE LAUNCH 101</span></div>

            <div className='flex-col sm:mt-[90px] md:mt-[40px]       '>
             
             <div className='relative  md:pl-[6px] '>
                <div className='relative'>
                    <img src={selectedResource.imgTablet}alt="" className=' my-[50px] xl:-mt-[65px]  md:w-screen md:h-[250px] sm:w-[300px] sm:h-[240px] ' />
                    
                </div>
              
              </div>

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
            <div className='font-barlow lg:text-[26px] xl:text-[34px] text-white'><span className='text-white/20 mr-2 xl:mr-4'>03</span>
                <span className='lg:tracking-wider'>SPACE LAUNCH 101</span></div>

         
            <div className='flex   xl:gap-[280px]  mt-[140px]  xl:mt-[125px]   '>
             

              <div className='flex gap-12 xl:gap-14  space-y-[1px] transition-all duration-1000 ease-in-out '>
                <div>
                    <Nav_Tech selectedResource={selectedResource} handleClick={handleClick} />
                </div>

               <div className='w-[400px] xl:w-[500px]   '>
                <h1 className='pt-4 text-secColor/70 text-2xl xl:text-[32px]'>THE TERMINOLOGY...</h1>
                <h1 className='mt-2 xl:mt-1 lg:text-[40px] xl:text-[55px] text-white font-bellefair   '>
                    {selectedResource.title}
                </h1>

                <h1 className='text-secColor  text-lg xl:text-xl font-bellefair'>
                    {selectedResource.content}
                </h1>
               </div>
                
                

               
            </div>
            
            <div className='absolute right-0  '>
                <img src={selectedResource.imgPortrait} alt="" className=' rounded-sm -mt-14  xl:-mt-[75px]  w-[400px] h-[400px] xl:w-[550px] xl:h-[450px]' />
                
              </div>
             
            </div>
        </div>
      </div>

       
    </div>
    
    </>
  )
}

export default Technology