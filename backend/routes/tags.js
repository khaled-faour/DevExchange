const {Router} = require('express');
const router = Router();
const tagController = require('../controllers/Tag.Controller');
const isAdmin = require('../middlewares/admin.middleware');


router.get("/", tagController.getAll);

module.exports = router;