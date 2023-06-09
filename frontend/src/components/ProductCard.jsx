import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom' // import it & use to get route parameter
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetails } from '../redux/actions/productActions'
import { addToCart } from '../redux/actions/cartActions'

const ProductCard = () => {
    const[qty, setQty] = useState(1)
    const { id } = useParams() // use to get the route parameter
    const navigate  = useNavigate()
    const dispatch = useDispatch()

    const productDestails = useSelector(state => state.getProductDetails)
    const {loading, error, product} = productDestails

    useEffect(() => {
        if(product && id !== product._id) {
            dispatch(getProductDetails(id))
        }
    }, [dispatch, product])

    const addToCartHandler = () => {
        dispatch(addToCart(product._id, qty))
        navigate('/cart')
    }


  return (
    <div className="productCard">
        {loading ? (<h2>Loading...</h2> ): error ? (<h2> {error} </h2>) : (
            <>
            <div className="productCard_left">
            <div className="left_image">
                <img 
                src={product.imageUrl}
                 alt={product.name}
                 />
            </div>
            <div className="left_info">
                <p className="left_name">{product.name}</p>
                <p>Price: ₦{product.price}</p>
                <p>Description: {product.description}</p>
            </div>
        </div>
        <div className="productCard_right">
            <div className="right_info">
                <p>Price: <span>₦{product.price}</span></p>
                <p>Status: <span>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</span></p>
                <p>Qty
                    <select value={qty} onChange={(e) => setQty(e.target.value)} >
                        {[...Array(product.countInStock).keys()].map((x) =>    
                            <option key={x+1} value={x+1}>{x+1}</option>
                        )}
                    </select>
                </p>
                <p>
                    <button type="button" onClick={addToCartHandler}>Add to Cart</button>
                </p>
            </div>
        </div>
            </>
        )}
    </div>
  )
}

export default ProductCard