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
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden xs:block"
        style={{ backgroundImage: `url(${BgTablet})` }}
      >
        <Navbar_Home isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

           <div className='flex flex-col -mt-[30px] mx-auto  '>
            <div className='font-barlow text-[28px] text-center  text-white'><span className='text-white/20 mr-2 xl:mr-4'>03</span>
                <span className='lg:tracking-wider'>SPACE LAUNCH 101</span></div>

            <div className='flex-col mt-[0px]  md:mt-[40px]       '>
             
             <div className='relative  flex justify-center items-center  '>
                <div className='relative'>
                    <img src={selectedResource.imgMobile }alt="" className=' md:mt-[12px] xl:-mt-[65px] w-screen h-[360px] sm:w-screen md:max-h-[220px]  sm:max-h-[200px] ' />
                    
                </div>
              
              </div>

              <div className=' '>

               
               <div className='w-[350px] sm:w-[500px] xl:w-[500px] flex-col justify-center items-center mx-auto   '>
                
                <div className='flex justify-center items-center'>
                    <Nav_Tech handleClick={handleClick} selectedResource={selectedResource} />
                </div>
                <h1 className='pt-6 sm:pt-[10px] md:pt-4 text-secColor/70  text-xl sm:text-[19px] md:text-xl xl:text-[32px] text-center'>THE TERMINOLOGY...</h1>
                <h1 className='mt-1 sm:mt-0  text-[30px] xl:text-[55px] text-white font-bellefair text-center   '>
                    {selectedResource.title}
                </h1>

                <h1 className='mt-1 sm:mt-0 text-secColor text-[17px] sm:text-[17px]  font-bellefair text-center'>
                    {selectedResource.content}
                </h1>
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

         <div className='flex flex-col -mt-7  '>
            <div className='font-barlow sm:text-2xl  md:text-[26px] sm:ml-10 text-white'><span className='text-white/20 mr-2 xl:mr-4'>03</span>
                <span className='lg:tracking-wider'>SPACE LAUNCH 101</span></div>

            <div className='flex-col sm:mt-[60px] md:mt-[40px]       '>
             
             <div className='relative  flex justify-center items-center  '>
                <div className='relative'>
                    <img src={selectedResource.imgTablet}alt="" className=' md:mt-[12px] xl:-mt-[65px]  sm:w-screen md:max-h-[220px]  sm:max-h-[200px] ' />
                    
                </div>
              
              </div>

              <div className=' '>

               
               <div className='w-[500px] xl:w-[500px] flex-col justify-center items-center mx-auto   '>
                
                <div className='flex justify-center items-center'>
                    <Nav_Tech handleClick={handleClick} selectedResource={selectedResource} />
                </div>
                <h1 className='sm:pt-[10px] md:pt-4 text-secColor/70 sm:text-[19px] md:text-xl xl:text-[32px] text-center'>THE TERMINOLOGY...</h1>
                <h1 className='md:mt-2 xl:mt-1 text-[30px] xl:text-[55px] text-white font-bellefair text-center   '>
                    {selectedResource.title}
                </h1>

                <h1 className='text-secColor sm:text-[17px]  font-bellefair text-center'>
                    {selectedResource.content}
                </h1>
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