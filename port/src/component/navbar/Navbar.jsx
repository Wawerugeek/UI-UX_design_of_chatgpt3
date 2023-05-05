import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Menu = () => (
  <>
    <p> <a href='#home'> Home </a></p>
    <p> <a href='#gpt3'> what is GPT3</a></p>
    <p> <a href='#possibility'> Possibility </a></p>
    <p> <a href='#features'> Features </a></p>
    <p> <a href='#blog'> Blog </a></p>
  </>
  //make the menu resuable and note we didn't use <div> it brought trouble
)
function Navbar() {
const [toggleMenu, setToggleMenu] = useState (false); //make the imported hook {useState work}

  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src= {logo} alt = "logo" />

        </div>
        <div className='gpt3__navbar-links_container'>
          <Menu />
        </div>
        <div className='gpt3__navbar-sign'>
          <p>sign in </p>
          <button type='button'> sign up</button>
        </div>
        <div className='gpt3__navbar-menu'>
          {toggleMenu 
          ? <RiCloseLine color="#fff" size = {27} onClick={() => setToggleMenu(false)} /> //makeit mobile responsive 
          : <RiMenu3Line color='#fff' size={27} onClick ={() => setToggleMenu(true)} />

          }
          {toggleMenu && ( 
            <div className='gpt3__navbar-menu_container scale-up-center'> 
            <div className='gpt3__navbar-menu_container-links'> 
            <Menu /> 
            <div className='gpt3__navbar-menu_container-links-sign'>
              <p>sign in </p>
              <button type='button'> sign up</button>
            </div>
            </div>
            </div>

          )    

          }
        </div>
      </div>

    </div>
  )
}

export default Navbar