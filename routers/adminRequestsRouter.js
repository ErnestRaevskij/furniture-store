const Router = require('express');
const router = new Router();

const authMiddleware = require('../middlewares/authMiddleware.js');
const roleMiddleware = require('../middlewares/roleMiddleware.js');

const controller = require('../controllers/adminRequestController.js');

router.post('/add-new-role',
    authMiddleware, roleMiddleware(['admin']), controller.addNewRole);
router.post('/remove-role', controller.removeRole);

module.exports = router;