
import React from 'react'
import './PlaceList.css'
import Card from '../../shared/components/UIElements/Card'
import PlaceItem from './PlaceItem'
const PlaceList = (props) => {
  return (
    if(props.items.length === 0) {
      return (
        <div className='place-list center'>
          <h2>No places found.</h2>
          <Card>
          <h2>no places to show</h2>
          <button>Share Place</button>
          </Card>
        </div>
      )
    }
  )
  return 
    <ul className='place-list'>
      {props.items.map(place =>< PlaceItem key={place.id} id={place.id} image={place.imageUrl} title={place.title} description={place.description} creatorId={place.creator}cordinate={place.location} />)}
      </ul>
};

export default PlaceList