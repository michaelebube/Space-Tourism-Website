import React, {useState} from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Destination from './components/Destination'
import Crew from './components/Crew'
import Technology from './components/Technology'
import { AnimatePresence, motion } from "framer-motion";



const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className='overflow-x-hidden transition-all ease-in-out duration-700 '>
     <AnimatePresence mode = 'wait'> 
      <Routes location={location} key={location.pathname}>
                        <Route path='/' element={<PageTransition>
                          <Home isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                          </PageTransition>}></Route>
                         <Route path='/destination' element={<PageTransition>
                          <Destination isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                          </PageTransition>}></Route>
                        <Route path='/crew' element={<PageTransition>
                          <Crew isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                          </PageTransition>}></Route>
                        <Route path='/technology' element={<PageTransition>
                            <Technology isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                          </PageTransition>}></Route>
      </Routes>
     </AnimatePresence>
    </div>
  )
}

const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: -50 }} 
    animate={{ opacity: 1, y: 0 }}   
    exit={{ opacity: 0, y: 50 }}     
    transition={{ duration: 0.5 }}   
  >
    {children}
  </motion.div>
);
export default App