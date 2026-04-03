import React from 'react'
import { MdDelete, MdDeleteOutline } from "react-icons/md";


const Card = ({title,desc,deleteNote}) => {
  return (
   <div className="card">
    <div className="del" onClick={deleteNote(title)}>

          <MdDelete />
    </div>

          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
   </div>
  )
}

export default Card