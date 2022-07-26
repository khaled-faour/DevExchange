const {Router} = require('express');
const router = Router();
const userController = require('../controllers/User.Controller');
const isAdmin = require('../middlewares/admin.middleware');


router.get("/:id", userController.getById);

module.exports = router;