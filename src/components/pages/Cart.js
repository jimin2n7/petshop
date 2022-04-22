import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { cartContext } from '../../App'
import './Cart.css'

function Cart() {
  const  {myCart, setCart, total, setTotal} = useContext(cartContext)
  const navigate = useNavigate()
  const handleCheckout = () =>{
    setCart([])
    setTotal(0)
  }

  const handleHome = ()=>{
    navigate("/")
  }

  return (
    <section className="cart-container">
      <div className="cart-header">CHECKOUT: </div>
      <div className="cart-items">
        {
          myCart.map(item =>{
            return(
              <div key={item.id} className="cart-item">
                <img className='cart-item-img' src={item.imageUrl} alt={`pic of ${item.name}`} />
                {item.name} : {item.price}$
              </div>
            )
          })
          
        }
        <div className="cart-total">TOTAL: {total}$</div>
      </div>
      <div className="cart-checkout" onClick={handleCheckout}>DONE</div>
      <div className="cart-gohome" onClick={handleHome}>RETURN HOME</div>
    </section>
  )
}

export default Cart