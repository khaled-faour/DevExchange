const {Router} = require('express');
const router = Router();
const userController = require('../controllers/User.Controller');
const isAdmin = require('../middlewares/admin.middleware');


router.get("/me", userController.getUserProfile);
router.post("/book", userController.bookSession);
router.get("/:id", userController.getById);
router.put("/:id", userController.updateById);

module.exports = router;