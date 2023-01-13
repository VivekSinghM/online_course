import React from 'react'
import Navbar from './navigation/Navbar'
import SideNav from './navigation/SideNav'

function Layout(props) {
  return (
    <div className='row mx-0' style={{minWidth:'605px'}}>
        <SideNav/>
        <div className='col p-0'>
          <Navbar/>
          {props.children}
          </div>
        </div>
  )
}

export default Layout