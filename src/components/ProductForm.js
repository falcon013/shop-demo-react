import React from "react";
import {addProductAction} from "../redux/productsActions";
import {connect} from "react-redux";
import {useForm} from "react-hook-form";

const ProductForm = (props) => {

    // const [name, setName] = useState('')
    // const [price, setPrice] = useState(0)
    // const [image, setImage] = useState('')
    // const [description, setDescription] = useState('')
    // const [rating, setRating] = useState(0)
    // const [gender, setGender] = useState('')

    // const onChangeName = e => {
    //     setName(e.target.value)
    // }
    // const onChangePrice = e => {
    //     setPrice(e.target.value)
    // }
    // const onChangeImage = e => {
    //     setImage(e.target.value)
    // }
    // const onChangeDescription = e => {
    //     setDescription(e.target.value)
    // }
    // const onChangeRating = e => {
    //     setRating(e.target.value)
    // }
    // const onChangeGender = e => {
    //     setGender(e.target.value)
    // }

    // const saveProduct = () => {
    // e.preventDefault()
    // const product = {
    //     name: name,
    //     price: price,
    //     image: image,
    //     description: description,
    //     rating: rating,
    //     gender: gender
    // }
    // props.addProduct(product)
    // props.history.push("/products")
    //}

    const {register,  handleSubmit,  formState: {errors, isValid}} =
        useForm(
            {mode: 'onBlur', reValidateMode: "onSubmit"})

    const saveProduct = (product) => {
        // const product = getValues()
        props.addProduct(product)
        props.history.push("/products")
    }

    return (
        <div className="create-product-form">
            <form onSubmit={handleSubmit(saveProduct)}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        name="name"
                        type="text"
                        {...register("name", {
                            required: true,
                            pattern: /^[a-zA-Z]+$/
                        })}
                        // type="text"
                        // className="form-control"
                        // id="name"
                        // required
                        // value={name}
                        // onChange={onChangeName}
                        // name="name"
                    />
                    {errors.name && errors.name.type === "required" && (
                        <p className="errorMsg">Product name should not be empty.</p>
                    )}
                    {errors.name && errors.name.type === "pattern" && (
                        <p className="errorMsg">Only English letters are allowed.</p>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input
                        name="price"
                        type="text"
                        {...register("price", {
                            required: true,
                            min: 1
                        })}
                    />
                    {errors.price && errors.price.type === "required" && (
                        <p className="errorMsg">Price should not be empty.</p>
                    )}
                    {errors.price && errors.price.type === "min" && (
                        <p className="errorMsg">The price should be greater than zero.</p>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="image">Image</label>
                    <input
                        name="image"
                        type="text"
                        {...register("image", {
                            required: true
                        })}
                    />
                    {errors.image && errors.image.type === "required" && (
                        <p className="errorMsg">Image should not be empty.</p>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input
                        name="description"
                        type="text"
                        {...register("description", {
                            required: true,
                            minLength: 3
                        })}
                    />
                    {errors.description && errors.description.type === "required" && (
                        <p className="errorMsg">Description should not be empty.</p>
                    )}
                    {errors.description && errors.description.type === "minLength" && (
                        <p className="errorMsg">The description should be  at least 3 characters.</p>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="rating">Rating</label>
                    <input
                        name="rating"
                        type="text"
                        {...register("rating", {
                            required: true,
                            min: 0,
                            max:5
                        })}
                    />
                    {errors.rating && errors.rating.type === "required" && (
                        <p className="errorMsg">Rating should not be empty.</p>
                    )}
                    {errors.rating && errors.rating.type === "min"  && (
                        <p className="errorMsg">The rating should be a number between 0 and 5.</p>
                    )}
                    {errors.rating && errors.rating.type === "max"  && (
                        <p className="errorMsg">The rating should be a number between 0 and 5.</p>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="gender">Gender</label>
                    <input
                        name="gender"
                        type="text"
                        {...register("gender", {
                            required: true,
                        })}
                    />
                    {errors.gender && errors.gender.type === "required" && (
                        <p className="errorMsg">Gender should not be empty.</p>
                    )}
                </div>
                {/*<button onClick={saveProduct} type="submit">Create</button>*/}
                <button className="disabled-btn" disabled={!isValid} type="submit">Create</button>
            </form>
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
