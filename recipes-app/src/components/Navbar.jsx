import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUtensils } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className='navbar'>
        <h2 className='title'>
          <p>Food Recipes</p>
          <FontAwesomeIcon icon={faUtensils} className='icon'/> 
        </h2>
        <Link to={'/'} className='home'>Home</Link>
      </div>
    </>
  )
}

export default Navbar