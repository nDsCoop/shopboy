import React, { useEffect, useState } from 'react';
//import data from '../data';
// import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { saveProduct, listProducts, deleteProduct } from '../actions/productActions';
// import { set } from 'mongoose';


function ProductsScreen(props) {
    const [modalVisible, setModalVisible] = useState(false);
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [countInStock, setCountInStock] = useState('');
    const [descriptions, setDescription] = useState('');
    
    const productList = useSelector(state => state.productList);
    const { loading, products, error } = productList;
    const ProductSave = useSelector(state => state.productSave);
    const { loading: loadingSave, success: successSave, error: errorSave } = ProductSave;
    const ProductDelete = useSelector(state => state.productDelete);
    const { loading: loadingDelete, success: successDelete, error: errorDelete } = ProductDelete;
    
    const dispatch = useDispatch();

    useEffect(() => {
        if (successSave) {
            setModalVisible(false);
        }
        dispatch(listProducts());
              return () => {
                  //
          };
  
      }, [successSave, successDelete]);
      const openModal = (product) => {
            setModalVisible(true);
            setId(product._id);
            setName(product.name);
            setPrice(product.price);
            setImage(product.image);
            setBrand(product.brand);
            setCategory(product.category);
            setCountInStock(product.countInStock);
            setDescription(product.descriptions);
      }
     const submitHandler = (e) => {
         e.preventDefault();
         dispatch(saveProduct({ _id: id, name, price, image, brand, category, countInStock, descriptions}));
     }
    const deleteHandler = (product) => {
        dispatch(deleteProduct(product._id));
    }
    return <div className="content content-margined">
            <div className="product-header">
            <h3>Products</h3>
            <button className="button secondary" onClick={() => openModal({})}>Create Product</button>
            </div>
            { modalVisible && 
            <div className="form">
                <form onSubmit= {submitHandler}>
                    <ul className="form-container">
                        <li>
                            <h2>Create Product</h2>
                        </li>
                        { loadingSave && <div>Loading...</div>}
                        { errorSave && <div> {errorSave} </div>}
                        <li>
                            <label htmlFor="name">
                                Name
                            </label>
                            <input type="text" value={name} name="name" id="name" onChange={(e) => setName(e.target.value)}></input>
                        </li>
                        <li>
                            <label htmlFor="price">
                                Price
                            </label>
                            <input type="text" value={price}  name="price" id="price" onChange={(e) => setPrice(e.target.value)}></input>
                        </li>
                        <li>
                            <label htmlFor="image">
                                Image
                            </label>
                            <input type="text" value={image} name="image" id="image" onChange={(e) => setImage(e.target.value)}></input>
                        </li>
                        <li>
                            <label htmlFor="brand">
                                Brand
                            </label>
                            <input type="text" name="brand" value={brand}  id="brand" onChange={(e) => setBrand(e.target.value)}></input>
                        </li>
                        <li>
                            <label htmlFor="categorye">
                                Category
                            </label>
                            <input type="text" name="category" value={category}  id="category" onChange={(e) => setCategory(e.target.value)}></input>
                        </li>
                        <li>
                            <label htmlFor="countInStock">
                                Count-InStock
                            </label>
                            <input type="text" name="countInStock" value={countInStock} id="countInStock" onChange={(e) => setCountInStock(e.target.value)}></input>
                        </li>
                        <li>
                            <label htmlFor="descriptions">
                                Description
                            </label>
                            <textarea name="descriptions" value={descriptions} id="descriptions" onChange={(e) => setDescription(e.target.value)}></textarea>
                        </li>
                        <li>
                            <button type="submit" className="button signin">{id ?  "Update" : "Create"}</button>
                        </li>
                        <li>
                            <button type="button" onClick={() => setModalVisible(false)} className="button secondary">Cancel</button>
                        </li>
                    </ul>
                </form>
            </div>
            }

            <div className="product=list">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Brand</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => ( <tr key={index}>
                            <td>{product._id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.category}</td>
                            <td>{product.brand}</td>
                            <td>
                                <button onClick={() => openModal(product)}>Edit</button>
                                {' '}
                                <button onClick={() => deleteHandler(product)}>Delete</button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>  
}
export default ProductsScreen; 