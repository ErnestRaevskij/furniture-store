const Router = require('express');
const router = new Router();

const controller = require('../controllers/furnitureController.js');

const authMiddleware = require('../middlewares/authMiddleware.js');
const roleMiddleware = require('../middlewares/roleMiddleware.js');

router.post('/add', 
    authMiddleware, roleMiddleware(['merchandiser', 'director']), controller.addNew);
router.get('/get-all', 
    authMiddleware, roleMiddleware(['client', 'secretary', 'merchandiser', 'director']), controller.getAll);

module.exports = router;
