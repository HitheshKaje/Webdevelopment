import React from 'react'
import './PlaceItem.css'
import Card from '../../shared/componenets/Card/Card1';
const PlaceItem = (props) => {
  return (
    <li className='place-item'>
        <Card className='place-item__content'>
        <div className='place-item__image'>
      <img src={props.image} alt={props.title} />
      </div>
      <div className='place-item__content'>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <p>Created by: {props.creatorId}</p>
      </div>
      <div className='place-item__actions'>

        <button>View On map</button>
        <button>Edit</button>
        <button>Delete</button>
      </div>
      </Card>
    </li>
  )
};

export default PlaceItem