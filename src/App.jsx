import React, {useState} from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Destination from './components/Destination'


const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className='overflow-x-hidden '>
     
      <Routes>
                        <Route path='/' element={<Home isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />}></Route>
                         <Route path='/destination' element={<Destination isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />}></Route>
                        {/* <Route path='/crew' element={<Crew />}></Route> */}
                        {/* <Route path='/technology' element={<Technology />}></Route> */}
      </Routes>
    </div>
  )
}

export default App