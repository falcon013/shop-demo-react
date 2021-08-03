import React, {useEffect} from "react";
import {connect} from 'react-redux';
import Product from "./Product";
import {deleteProductAction, getProductsAction} from "../redux/productsActions";
import {Link} from "react-router-dom";


const ProductsList = ({products, getProducts, isLoadingProducts,deleteProduct}) => {

    useEffect(() => {
        if (products && !products.length) {
            getProducts()
        }
    }, [products, getProducts]);

    return (
        <div>
            <div className="add-product" >
                <Link to={`/create`}>
                    <button>Add product</button>
                </Link>
            </div>
            {isLoadingProducts &&  <h1>...Loading</h1>}
            {products &&
                <div className="products">
                    {products.map((product) => (
                        <Product key={product._id} product={product} deleteProduct={deleteProduct}/>
                    ))}
                </div>
            }
        </div>
    );

};

const mapStateToProps = (state) => ({
    products: state.products.products,
    isLoadingProducts: state.isLoadingProducts

});

const mapDispatchToProps = (dispatch) => {
    return {
        getProducts: () => dispatch(getProductsAction()),
        deleteProduct: (id) => dispatch(deleteProductAction(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList)