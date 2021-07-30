import React, {useState} from "react";
import {addProductAction} from "../redux/productsActions";
import {connect} from "react-redux";

const ProductForm = (props) => {
    // const [id, setId] = useState(null)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')
    const [rating, setRating] = useState(0)
    const [gender, setGender] = useState('')

    const onChangeName = e => {
        setName(e.target.value)
    }
    const onChangePrice = e => {
        setPrice(e.target.value)
    }
    const onChangeImage = e => {
        setImage(e.target.value)
    }
    const onChangeDescription = e => {
        setDescription(e.target.value)
    }
    const onChangeRating = e => {
        setRating(e.target.value)
    }
    const onChangeGender = e => {
        setGender(e.target.value)
    }

    const saveProducts = (e) => {
        e.preventDefault()
        props.addProduct({
            name: name,
            price: price,
            image: image,
            description: description,
            rating: rating,
            gender: gender
        })
        console.log(props)
    }
    return (
        <div className="create-product-form">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    required
                    value={name}
                    onChange={onChangeName}
                    name="name"
                />
            </div>
            <div className="form-group">
                <label htmlFor="price">Price</label>
                <input
                    type="text"
                    className="form-control"
                    id="price"
                    required
                    value={price}
                    onChange={onChangePrice}
                    name="price"
                />
            </div>
            <div className="form-group">
                <label htmlFor="image">Image</label>
                <input
                    type="text"
                    className="form-control"
                    id="image"
                    required
                    value={image}
                    onChange={onChangeImage}
                    name="image"
                />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                    type="text"
                    className="form-control"
                    id="description"
                    required
                    value={description}
                    onChange={onChangeDescription}
                    name="description"
                />
            </div>
            <div className="form-group">
                <label htmlFor="rating">Rating</label>
                <input
                    type="text"
                    className="form-control"
                    id="rating"
                    required
                    value={rating}
                    onChange={onChangeRating}
                    name="rating"
                />
            </div>
            <div className="form-group">
                <label htmlFor="gender">Gender</label>
                <input
                    type="text"
                    className="form-control"
                    id="gender"
                    required
                    value={gender}
                    onChange={onChangeGender}
                    name="gender"
                />
            </div>
            <button onClick={saveProducts} type="submit">Create</button>
        </div>
    )
};

const mapStateToProps = (state) => ({
    products: state.products.products

});

const mapDispatchToProps = (dispatch) => {
    return {
        addProduct: (product) => dispatch(addProductAction(product))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductForm)
