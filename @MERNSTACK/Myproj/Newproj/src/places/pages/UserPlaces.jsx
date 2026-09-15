import React from 'react'
import PlaceList from '../components/PlaceList'
const Dummy_places = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl: 'https://example.com/empire-state-building.jpg',
    address: '101 West 57th Street, New York, NY 10019',
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: 'u1'
  },

   {
    id: 'p2',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl: 'https://example.com/empire-state-building.jpg',
    address: '101 West 57th Street, New York, NY 10019',
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: 'u2'
  }
]


const UserPlaces = () => {
  return (
    <PlaceList items={Dummy_places} />
  )
}

export default UserPlaces