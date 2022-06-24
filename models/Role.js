const {Schema, model} = require('mongoose');

const RoleSchema = new Schema({
    value: {type: String, unique: true, required: true}
});

module.exports = model('Role', RoleSchema);