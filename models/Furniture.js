const {Schema, model} = require('mongoose');

const FurnitureSchema = new Schema({
    name: {type: String, required: true, unique: false},
    color: {type: String, default: 'undefined'},
    count: {type: Number} 
});

module.exports = model('Furniture', FurnitureSchema);