import React, { useState, useContext } from 'react'
import { cartContext } from '../../App' 
import './DogCard.css'

function DogCard({id, name, breed, price, description, imageUrl}) {
    const {setCart, setTotal} = useContext(cartContext)
    const [isAdded, setAdded] = useState(false)
    const handleClick = ()=>{
        setAdded(true)
        const newItem = {
            id,
            name,
            price,
            imageUrl
        }

        setCart((item) => [...item,newItem])
        setTotal((total) => (total += Number(price)))
    }
    
  return (
    <section className="dogs">
        <div className="dogs-info">
            <p>{name}</p>
            <p>{breed}</p>
        </div>
        <div className="dogs-img-container">
            <img src={imageUrl} alt={`pic of dog ${name}`} className="dog-img" />
        </div>
        <div className="dogs-desc">{description}</div>
        <div className="dogs-price">{price}$</div>
        {isAdded?<button className="dogs-btn-disabled">ADDED</button>:<button className="dogs-btn" onClick={handleClick}>ADD TO CART</button>}
    </section>
  )
}

export default DogCard