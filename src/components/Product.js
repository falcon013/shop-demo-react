import React from "react";
import {Link} from "react-router-dom";

const Product = (props) => {

    const {product,deleteProduct} = props

    return (
        <div key={product._id}>
                <div className='product-entity'>
                    <img src={product.image} alt={product.name}/>
                    <p>{product.rating}</p>
                    <div className="header">
                        <h3>{product.name}</h3>
                        <h5>{product.gender}</h5>
                    </div>
                        <div className="main">
                            <p>{product.description}</p>
                        </div>
                        <div className="footer">
                            <p>$ {product.price}</p>
                            <div className="buttons">
                                <button onClick={()=> deleteProduct(product._id)}>Delete</button>
                                <Link to={`/product/${product._id}`}>
                                    <button>Details</button>
                                </Link>
                            </div>
                        </div>
                </div>
        </div>
    )
};

export default Product;