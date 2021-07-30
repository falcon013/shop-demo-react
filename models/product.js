const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    image: {type:String,required:true},
    name: {type: String, required: true, max: 100},
    price: {type: Number, required: true},
    description: {type:String,required:true},
    rating: {type:Number,required:true},
    gender: {type:String,required:true}

});

// Export the model
module.exports = mongoose.model('Product', ProductSchema);