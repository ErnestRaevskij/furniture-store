const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
    login: {type: String, unique: true, required: true},
    password : {type: String, unique: true, required: true},
    role: {type: String, ref: 'RoleSchema'}
});

module.exports = model('User', UserSchema);