const Furniture = require('../models/Furniture');

class FurnitureController {
    async addNew(req, res) {
        try {
            const { name, color, count } = req.body;

            const furniture = await Furniture.findOne({ name, color });
            if (furniture) {
                furniture.count += count;
                await furniture.save();
                return res.json({ message: 'This item is already added. Quantity increased' });
            }

            const newFarniture = new Furniture({ name, color, count });
            await newFarniture.save();
            return res.json({ message: 'Successful added' });
        } catch (error) {
            console.log(error)
            return res.status(400).json({ message: 'Error when adding a new furniture' });
        }
    }

    async getAll(req, res) {
        try {
            
        } catch (error) {
            return res.status(400).json({ message: 'Error when receiving furnitures' });
        }
    }
}

module.exports = new FurnitureController();