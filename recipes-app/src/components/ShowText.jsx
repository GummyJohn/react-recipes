import React, { useState } from 'react'

const ShowText = ({children}) => {
  const [expanded, setExpanded] = useState(true);

  if(children.length <= 100){
    <p className='category-about'>
        <strong>About: </strong> 
        {children}
    </p>
  } 

  const text = expanded ? children.substring(0, 100) : children;

  return (
    <>
      <p className='category-about'>
      <strong>About: </strong> 
      {text}
      <p>Click on image to select!</p>
      </p>
      <button onClick={() => setExpanded(!expanded)} className='btn'>
        {expanded ? 'Show More...' : 'Show Less'}
      </button>
    </>
  )
}

export default ShowText