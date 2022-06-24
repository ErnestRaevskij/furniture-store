module.exports = (roles) => {
    return (req, res, next) => {
        if (req.method === "OPTIONS")
            next();

        try {
            if (!req.user)
                res.status(403).json({ message: `The user is not logged in` });

            const { role } = req.user;
            if (!roles.includes(role))
                return res.status(403).json({ message: `You don't have access` });
                
            next();
        } catch (error) {
            console.log(e);
            return res.status(403).json({ message: `You don't have access` });
        }

    }
}