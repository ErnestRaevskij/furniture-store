const jwt = require('jsonwebtoken');

const { secretKey } = require('./config.js');

class Token {
    generateAccessToken(id, role, lifeTime) {
        const payload = {
            id,
            role,
        };

        return jwt.sign(payload, secretKey, { expiresIn: lifeTime });
    }

    verifyAccessToken(token) {
        return jwt.verify(token, secretKey);
    }
}

module.exports = new Token();