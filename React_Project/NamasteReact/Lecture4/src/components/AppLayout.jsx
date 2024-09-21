import React from 'react'
import Header from './Header'
import Body from './Body'
import { Outlet } from 'react-router-dom'
function AppLayout() {
  return (
    <div className="app">
        <Header />
        {/* Implementing the condition on the application so that children route is rendered */}
        <Outlet/>
    </div>
  )
}

export default AppLayout
