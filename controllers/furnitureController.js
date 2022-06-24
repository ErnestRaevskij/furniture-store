const Furniture = require('../models/Furniture');

class FurnitureController {
    async addNew(req, res) {
        try {

        } catch (error) {
            return res.status(400).json({ message: 'Error when adding a new furniture' });
        }
    }

    async getAll(req, res) {
        try {
            res.json(req.user);
        } catch (error) {
            return res.status(400).json({ message: 'Error when receiving furnitures' });
        }
    }
}

module.exports = new FurnitureController();