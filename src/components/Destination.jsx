import React, { useState } from 'react'
import Navbar_Home from './Navbar_Home'
import BgDesk from '../assets/destination/background-destination-desktop.jpg'
import BgTablet from '../assets/destination/background-destination-tablet.jpg'
import BgMobile from '../assets/destination/background-destination-mobile.jpg'
import  destResources  from '../DestResources'
import Navbar_Dest from './Navbar_Dest'


const Destination = ({isSidebarOpen, toggleSidebar}) => {

    const [selectedResource, setSelectedResource] = useState(destResources['Moon'])

    const handleClick = (resourceKey) => {
        setSelectedResource(destResources[resourceKey])
    }

  return (
   <>

 

   <div className="relative w-screen h-screen">

     <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat block  md:hidden xl:hidden "
    style={{ backgroundImage: `url(${BgMobile})` }}
  >
    <Navbar_Home isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

    <div className="font-barlow text-2xl sm:text-3xl text-white   sm:-mt-[30px] sm:pl-[28%] pl-[20%] -mt-[30px]">
      <span className="text-white/30 mr-4 sm:mr-6">01</span>
      <span className="lg:tracking-wider">PICK YOUR DESTINATION</span>
    </div>

    <div className="flex flex-col mx-auto justify-center items-center gap-2 mt-7 sm:mt-[22px] ">
      <div>
        <img src={selectedResource.img} alt="" className="w-[200px] h-[200px] sm:w-[230px] sm:h-[230px] xl:w-[400px] xl:h-[400px] mx-auto " />
      </div>

      <div className="flex flex-col items-center justify-center mx-auto    mt-2 sm:mt-1">
        <div className="">
          <Navbar_Dest handleClick={handleClick} selectedResource={selectedResource} />
        </div>
        <div className="w-[400px] flex justify-center  mx-auto ">
          <h1 className="text-[50px] sm:text-[80px] sm:-mt-[50px] mt-2  text-white font-bellefair text-center">
            {selectedResource.title}
          </h1>
        </div>

        <p className="lg:pl-24 w-[320px] sm:w-[350px] md:w-[400px] xl:w-[650px] text-[18px] sm:text-[17px] md:text-[16px] xl:text-[20px] sm:-mt-[22px]  mx-auto font-barlow text-secColor/50 xl:pl-[250px] md:ml-[4%] text-center">
          {selectedResource.content}
        </p>
        <div className="border-b-[1px] text-white w-[300px] sm:w-[350px] lg:w-[300px] md:w-[390px]  md:ml-8 sm:mt-3 lg:ml-24 mt-6 md:mt-4 lg:mt-8"></div>

        <div className=" sm:flex gap-[68px]   sm:mt-[10px] mx-auto  lg:pl-24 xl:pl-[250px] md:pl-28">
          <div>
            <h4 className="text-secColor/50 text-[22px] lg:text-[12px]  sm:text-[13px] md:text-[10px] xl:text-sm mb-1 sm:-mb-1">AVG. DISTANCE</h4>
            <h3 className="text-white ml-3 sm:ml-1 sm:text-lg text-2xl md:text-[16px] lg:text-xl xl:text-2xl">{selectedResource.avgDistance}</h3>
          </div>

          <div>
            <h4 className="text-secColor/50 mt-6 sm:mt-0 text-[20px] sm:text-[13px] lg:text-[12px] md:text-[10px] xl:text-sm mb-1 sm:-mb-1">EST. TRAVEL TIME</h4>
            <h3 className="text-white text-2xl sm:text-lg ml-7 sm:ml-2  md:text-[16px] lg:text-xl xl:text-2xl">{selectedResource.travelTime}</h3>
          </div>
        </div>
      </div>
    </div>

    {/* Overlay */}
    {isSidebarOpen && (
      <div
        className="fixed inset-0 z-0 bg-primaryColor opacity-100 transition-opacity duration-300 ease-in-out"
        onClick={toggleSidebar} 
      ></div>
    )}
  </div>


 


      {/* Tablet Background and Navbar */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden  md:block lg:hidden overflow-y-hidden "
        style={{ backgroundImage: `url(${BgTablet})` }}
      >
        <Navbar_Home isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        
            <div className='font-barlow text-2xl text-white -mt-[22px] pl-[8%]'><span className='text-white/20 mr-2 '>01</span>
                <span className='lg:tracking-wider'>PICK YOUR DESTINATION</span></div>

            <div className='flex flex-col pl-[30%] gap-2 mt-[22px] transition-transform duration-500 ease-in-out transform translate-x-5  '>
              <div>
                <img src={selectedResource.img} alt="" className='w-[250px] h-[250px] xl:w-[400px] xl:h-[400px] ml-8' />
              </div>

              <div className='flex flex-col transition-transform duration-500 ease-in-out transform translate-x-5 -ml-[14%] '>

                <div className=''>
                    <Navbar_Dest handleClick={handleClick} selectedResource={selectedResource} />
                </div>
                <div className='w-[400px] flex   justify-center mx-8 '>
                    <h1 className=' text-[80px] -mt-[70px]  text-white font-bellefair  text-center  '>
                    {selectedResource.title}
                </h1>
                </div>
                
                <p className=' lg:pl-24  md:w-[400px] xl:w-[650px] text-[16px] xl:text-[20px] lg:-mt-4 md:-mt-4   font-barlow text-secColor/50 xl:pl-[250px] ml-[4%] text-center  '>
                    {selectedResource.content}
                </p>
                <div className='border-b-[1px] text-white lg:w-[300px] md:w-[390px] md:ml-8  lg:ml-24 md:mt-4 lg:mt-8'></div>

                <div className='flex gap-[68px] mt-4  lg:pl-24 xl:pl-[250px] md:pl-28 '>
                    <div>
                        <h4 className='text-secColor/50 lg:text-[12px] md:text-[10px] xl:text-sm'>AVG. DISTANCE</h4>
                        <h3 className='text-white md:text-[16px] lg:text-xl xl:text-2xl mt-1'>{selectedResource.avgDistance}</h3>
                    </div>

                    <div>
                        <h4 className='text-secColor/50 text-[12px] md:text-[10px] xl:text-sm'>EST. TRAVEL TIME</h4>
                        <h3 className='text-white md:text-[16px]  lg:text-xl xl:text-2xl mt-1'>{selectedResource.travelTime}</h3>
                    </div>
                </div>
                
              
              </div>
              

              <div>

              </div>
            </div>
        
      </div>

    
     {/* Desktop Background and Navbar */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden lg:block "
        style={{ backgroundImage: `url(${BgDesk})` }}
      >
        <Navbar_Home isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

         <div className='flex flex-col mt-2 xl:mt-1   xl:pl-[180px] lg:pl-[14%] '>
            <div className='font-barlow lg:text-2xl xl:text-4xl text-white'><span className='text-white/20 mr-2 xl:mr-4'>01</span>
                <span className='lg:tracking-wider'>PICK YOUR DESTINATION</span></div>

            <div className='flex lg:gap-8 xl:gap-[80px]  mt-32 xl:mt-[80px] transition-transform duration-500 ease-in-out transform translate-x-5  '>
              <div>
                <img src={selectedResource.img} alt="" className='w-[350px] h-[350px] xl:w-[400px] xl:h-[400px]' />
              </div>

              <div className='flex flex-col transition-transform duration-500 ease-in-out transform translate-x-10 '>

                <div>
                    <Navbar_Dest handleClick={handleClick} selectedResource={selectedResource} />
                </div>
                <h1 className='mt-4 xl:mt-1 text-[80px] xl:text-[110px] text-white font-bellefair lg:pl-24 xl:pl-[250px] '>
                    {selectedResource.title}
                </h1>
                <p className=' lg:pl-24 w-[400px] xl:w-[650px] text-[16px] xl:text-[20px] -mt-3 xl:-mt-5 font-barlow text-secColor/50 xl:pl-[250px] '>
                    {selectedResource.content}
                </p>
                <div className='border-b-[1px] text-white w-[300px] ml-24 mt-8 xl:w-[400px]  xl:ml-[250px]'></div>

                <div className='flex gap-[68px] mt-5 xl:mt-4 pl-24 xl:pl-[250px] '>
                    <div>
                        <h4 className='text-secColor/50 text-[12px] xl:text-sm'>AVG. DISTANCE</h4>
                        <h3 className='text-white text-xl xl:text-2xl mt-1'>{selectedResource.avgDistance}</h3>
                    </div>

                    <div>
                        <h4 className='text-secColor/50 text-[12px] xl:text-sm'>EST. TRAVEL TIME</h4>
                        <h3 className='text-white text-xl xl:text-2xl mt-1'>{selectedResource.travelTime}</h3>
                    </div>
                </div>
                
              
              </div>
              

              <div>

              </div>
            </div>
        </div>
      </div>

       
    </div>
   </>
  )
}

export default Destination