import React, {useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {connect} from 'react-redux';
import {getProductAction} from "../redux/productsActions";

const ProductDetails = ({product, getProduct}) => {
    const {productId} = useParams();

    useEffect(() => {
        getProduct(productId);
    }, [getProduct]);

    if (!productId) return null
    return (
        <div className="grid container">
            <div>
                <Link to="/products">
                    <p className='go-back'>Go back</p>
                </Link>
                <img src={product.image} alt={product.name}/>
                <p>{product.rating}</p>
                <h3>{product.name}</h3>
                <h5>{product.gender}</h5>
                <p>{product.description}</p>
                <p>$ {product.price}</p>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    product: state.products.product,


});

const mapDispatchToProps = (dispatch) => {
    return {
        getProduct: (id) => dispatch(getProductAction(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails)