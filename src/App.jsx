import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'

const App = () => {
  return (
    <div className='overflow-x-hidden'>
     
      <Routes>
                        <Route path='/' element={<Home />}></Route>
                        {/* <Route path='/destination' element={<Destination />}></Route>
                        <Route path='/crew' element={<Crew />}></Route>
                        <Route path='/technology' element={<Technology />}></Route> */}
      </Routes>
    </div>
  )
}

export default App