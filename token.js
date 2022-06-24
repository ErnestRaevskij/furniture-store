const jwt = require('jsonwebtoken');

class Token {
    generateAccessToken(id, role, lifeTime) {
        const payload = {
            id,
            role,
        };

        return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: lifeTime });
    }

    verifyAccessToken(token) {
        return jwt.verify(token, process.env.SECRET_KEY);
    }
}

module.exports = new Token();