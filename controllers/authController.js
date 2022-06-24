const User = require('../models/User');
const Role = require('../models/Role');

const validator = require('./authentication/validator.js');
const hashing = require('./authentication/hashing.js'); 
const token = require('../token.js');

class AuthController {
    async registration(req, res) {
        try {
            const {login, password} = req.body;

            const passwordCheckingResult = validator.isCorrectPassword(password);
            const loginCheckingResult = validator.isCorrectLogin(login);
            if (!passwordCheckingResult.status) 
                return res.status(400).json({ message: passwordCheckingResult.message });
            if (!loginCheckingResult.status) 
                return res.status(400).json({ message: loginCheckingResult.message });

            const candidate = await User.findOne({ login });
            if (candidate)
                return res.status(400).json({ message: 'A user with this login already exists' }); 
            
            const hashPassword = hashing.hash(password);  
            const role = await Role.findOne({ value: 'client' });   
            const user = new User({ login, password: hashPassword, role: role.value });
            await user.save();

            return res.json({message: 'Successfully registered'}); 
        } catch (error) {
            console.log(error);
            res.status(400);
            res.json({message: 'Registration error', error: `${error}`});
        }
    }

    async login(req, res) {
        try {
            const { login, password } = req.body;

            const user = await User.findOne({ login });
            if (!user)
                return res.status(400).json({ message: 'A user with this login not found' }); 

            if (!hashing.compare(password, user.password))
                return res.status(400).json({ message: 'Invalid password entered' }); 

            const accessToken = token.generateAccessToken(user._id, user.role, '24h');

            return res.json({ message: 'Successful login', token: accessToken }); 
        } catch (error) {
            console.log(error);
            res.status(400);
            res.json({message: 'Login error', error: `${error}`});
        }
    }
}

module.exports = new AuthController();