const Role = require('../models/Role');

class AdminRequestsController {
    async addNewRole(req, res) {
        try {
            const { newRole } = req.body;

            if (await Role.findOne({value: newRole}))
                return res.status(400).json({ message: 'This role has been already created' });

            const role = new Role({ value: newRole });
            await role.save();

            res.json({ message: `The '${newRole}' role has been successfully added` });
        } catch (error) {
            console.log(error);
            res.status(400);
            res.json({message: 'Error in adding new role', error: `${error}`});
        }
    }

    async removeRole(req, res) {
        try {
            const { roleName } = req.body;

            if (!await Role.findOne({value: roleName}))
                return res.status(400).json({ message: 'This role not found' });

            await Role.deleteOne({ value: roleName });

            res.json({ message: `The '${roleName}' role has been successfully deleted` });
        } catch (error) {
            console.log(error);
            res.status(400);
            res.json({message: 'Error in removing a role', error: `${error}`});
        }
    }
}

module.exports = new AdminRequestsController();