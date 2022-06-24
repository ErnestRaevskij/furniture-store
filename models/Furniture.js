const {Schema, model} = require('mongoose');

const FurnitureSchema = new Schema({
    name: {type: String, unique: true, required: true},
    color: {type: String, unique: true, default: 'undefined'},
    count: {type: Number, unique: false} 
});

module.exports = model('Furniture', FurnitureSchema);