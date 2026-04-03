import React from 'react'
import { useState } from 'react'

const Contact = () => {
    const [phone,setphone]=useState(0)
    const handleChange=(e) => {
        setphone(e.target.value)
      
    }
    
  return (
    <div>
        <form action="">
            <input id='phone' onChange={handleChange} 
              name='phone'value={phone}type='text' />
        </form>

    </div>
  )
}

export default Contact