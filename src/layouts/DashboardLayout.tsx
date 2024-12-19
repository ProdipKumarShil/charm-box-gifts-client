import React from 'react'
import { Outlet } from 'react-router-dom'

const DashboardLayout: React.FC = () => {
  return (
    <div className='grid grid-cols-12'>
      <div className="col-span-2 bg-red-300 w-full h-screen"></div>
      <div className="col-span-10">
        <Outlet />
      </div>
    </div>
  )
}

export default DashboardLayout