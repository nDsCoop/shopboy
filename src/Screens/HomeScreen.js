import React, { useEffect, useState } from 'react';
//import data from '../data';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Filter from '../components/Filter';


function HomeScreen(props) {
    const [sort, setSort] = useState("");
    const [filt, setFilt] = useState("");
    const productList = useSelector(state => state.productList);
    const { products, loading, error } = productList;
    const dispatch = useDispatch();
    
    const sortProducts =(sort) => {
        //ipml
    }
    const filtProducts = (filt) => {
        //iml
    }

    useEffect(() => {
      dispatch(
        listProducts());
            return () => {
                //
        };

    }, [])


    return loading ? <div>Loading..</div> :
    error ? <div>{error}</div> :
    <div className="home-content">
    <ul>
      <Filter count={products.length}
      sort = {sort}
      filt = {filt}
      ></Filter>
    </ul>
    <ul className="products">
    {
      products.map( (product, index) => 
        <li key = {index} >
        <div className="product">
            <Link to={'/product/' + product._id}>
                <img className="product-image" src={product.image} alt="product"></img>
            </Link>
            <div className="product-name">
                <Link to={'/product/' + product._id}>{product.name}</Link>
            </div>
            <div className="product-brand">{product.brand}</div>
            <div className="product-price">${product.price}</div>
            <div className="product-rating">{product.rating} Stars ( {product.munReviews} Review)</div>
        </div>
    </li>
      )
    }
  </ul>
  </div>
}
export default HomeScreen;