
import React from 'react'
import './PlaceList.css'
import Card from '../../shared/componenets/Card/Card1';
import PlaceItem from './PlaceItem'
const PlaceList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className='place-list center'>
        <h2>No places found.</h2>
        <Card>
          <h2>No places to show</h2>
          <button>Share Place</button>
        </Card>
      </div>
    )
  }

  return (
    <ul className='place-list'>
      {props.items.map(place => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.imageUrl}
          title={place.title}
          description={place.description}
          creatorId={place.creator}
          coordinate={place.location}
        />
      ))}
    </ul>
  )
};

export default PlaceList