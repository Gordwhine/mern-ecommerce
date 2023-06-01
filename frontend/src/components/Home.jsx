import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux' // use as hooks
import Product from "./Product"
//Actions
import { getProducts as listProducts } from '../redux/actions/productActions'

const Home = () => {
  const dispatch = useDispatch( )

  const getProducts = useSelector(state => state.getProducts)
  const { products, loading, error } = getProducts


  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch]); // [dispatch]->dependency

  return (
    <div className="homescreen">
      <h2 className="homescreen_title">Latest Products</h2>
      <div className="homescreen_products">
       {loading ? (
          <h3>Loading...</h3> 
          ) : error ? (
            <h3>{error}</h3>
          ) : (
            products.map((product) => 
            <Product 
              key={product._id} 
              productId={product._id}
              name={product.name}
              price={product.price}
              description={product.description}
              imageUrl={product.imageUrl}
            />)
          )}
      </div>
    </div>
  )
}

export default Home