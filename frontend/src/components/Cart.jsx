import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

// Action
import { addToCart, removeFromCart } from '../redux/actions/cartActions'


import CartItem from "./CartItem"


const Cart = () => {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const { cartItem }  = cart
  
  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty))
  }

  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id))
  }

  const getCartCount = () => {
    return cartItem.reduce((qty, item) => Number(item.qty) + qty, 0)
  }

  const getCartSubTotal = () => {
    return cartItem.reduce((price, item) => item.price * item.qty + price, 0)
  }


  return (
    <div className="cartscreen">
      <div className="cart_left">
        <h2>Shopping Cart</h2>
        {cartItem.length === 0 ? (
          <div>Your cart is empty <Link to="/">Go Back</Link></div>
        ) : cartItem.map((item) => (
          <CartItem 
            item={item} 
            qtyHandler={qtyChangeHandler}
            removeHandler={removeItemFromCart}
             />
        ))}
      </div>
      <div className="cart_right">
        <div className="cart_info">
          <p>Subtotal ({getCartCount()}) items</p>
          <p>₦{getCartSubTotal().toFixed(2)}</p>
        </div>
        <div>
          <button>Proceed To Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Cart