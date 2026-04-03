import React from 'react'
const Navbar = (props) => {
  return (
    <div className='nav'style={{backgroundColor:props.color}}>
      <div className='logo'>{props.logoText}</div>
        <ul>

          {props.items.map((item,index)=>{
            return <li key={index}>{item}</li>
          }
          )}
        </ul>
    </div>
  )
}

export default Navbar