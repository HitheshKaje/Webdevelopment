import React,{useState} from 'react'
import { Link } from 'react-router-dom'

import MainHeader from './MainHeader'

import NavLink from './NavLink'
import SideDrawer from './SideDrawer'
import './MainNavigation.css'
import Backdrop from './UIElements/Backdrop'

const MainNavigation = (props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const openDrawer = () => {
    setIsDrawerOpen(true)
  }

  const closeDrawer = () => {
    setIsDrawerOpen(false)
  }


  return (
    <>
    {isDrawerOpen &&(
      <Backdrop onClick={closeDrawer} />
    )}
    {isDrawerOpen &&(
      <SideDrawer show={isDrawerOpen} onClick={closeDrawer}>
        <nav className='main-navigation__drawer-nav'>
            <NavLink />
        </nav>
        </SideDrawer>
   )}  <MainHeader>
        <button className='main-navigation__menu-btn' onClick={() => setIsDrawerOpen(true)}>
            <span />
            <span />
            <span />
        </button>
        <h1 className='main-navigation__title'>
            <Link to="/">Your Places</Link>
        </h1>
        <nav className='main-navigation__header-nav'>
          <NavLink />
        </nav>
        </MainHeader>
    </>
  )
}

export default MainNavigation