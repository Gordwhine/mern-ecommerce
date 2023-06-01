import {Link} from "react-router-dom"
import { useSelector } from "react-redux";

const NavBar = ({ click}) => {
    const cart = useSelector(state => state.cart)
    const { cartItem } = cart

    const getCartCount = () => {
        return cartItem.reduce((qty, item) => Number(item.qty) + qty, 0)
    }



  return (
    <nav className="navbar">
        <Link to="/">
        <div className="navbar_logo">
            <h2>G-Store</h2>
        </div>
        </Link>

        <ul className="navbar_links">
            <li>
                <Link to="/cart" className="cart_link">
                    <i className="fas fa-shopping-cart"></i>
                   <span>
                   Cart
                    <span className="cartlogo_badge">{getCartCount()}</span>
                   </span>
                </Link>
            </li>
            <li>
                <Link to="/">
                    Shop
                </Link>
            </li>
        </ul>
        <div className="hamburger_menu" onClick={click}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </nav>
  )
}

export default NavBar;