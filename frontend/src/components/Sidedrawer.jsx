import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";

const Sidedrawer = ({ show, click }) => {
  const sideDrawerClass = ["sidedrawer"]

  const cart = useSelector(state => state.cart)
  const { cartItem } = cart

  const getCartCount = () => {
      return cartItem.reduce((qty, item) => Number(item.qty) + qty, 0)
  }

  if(show) {
    sideDrawerClass.push("show")
  }

  return <div className={sideDrawerClass.join("")}>
    <ul className="sidedrawer_links" onClick={click}>
      <li>
        <Link to="/cart">
          <i className="fas fa-shopping-cart"></i>
          <span>
            Cart <span className="sidedrawer_cartbadge">{getCartCount()}</span>
          </span>
        </Link>
      </li>
      <li>
        <Link to="/">
          Shop
        </Link>
      </li>
    </ul>
  </div>
}

export default Sidedrawer