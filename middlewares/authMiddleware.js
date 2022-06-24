const token = require('../token.js');

module.exports = (req, res, next) => {
    if (req.method === 'OPTIONS')
        next();

    try {
        const accessToken = req.headers.authorization.split(' ')[1];
        if (!accessToken)
            return res.status(403).json({ message: "The user is not logged in" });

        const decodedData = token.verifyAccessToken(accessToken);
        req.user = decodedData;
        next();
    } catch (error) {
        return res.status(403).json({ message: "The user is not logged in" });
    }
};