const Router = require('express');
const router = new Router();

const controller = require('../controllers/adminRequestController.js');

router.post('/add-new-role', controller.addNewRole);
router.post('/remove-role', controller.removeRole);

module.exports = router;