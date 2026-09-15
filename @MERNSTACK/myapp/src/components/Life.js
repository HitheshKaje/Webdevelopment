import React from 'react'

const Life = (props) => {
  return (
    <div>
      <button onClick={props.handleClick}>Click Me</button>
      <div>{props.message}</div>
    </div>
  )
}

export default Life