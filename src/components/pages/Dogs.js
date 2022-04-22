import React from 'react'
import DogCard from './DogCard'
import './Dogs.css'

function Dogs({allDogs}) {
  return (
    <section className="dogs-container">
      {
        allDogs.map(dog =>(
          <DogCard key={dog.id} id={dog.id} 
          name ={dog.name}
          breed ={dog.breed}
          price = {dog.price}
          description = {dog.description}
          imageUrl = {dog.imageUrl}/>
        ))
      }
    </section>
  )
}

export default Dogs