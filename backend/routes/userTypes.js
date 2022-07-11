const {Router} = require('express');
const router = Router();
const userTypesController = require('../controllers/UserType.Controller');
const isAdmin = require('../middlewares/admin.middleware');


router.post("/", isAdmin, userTypesController.addUserType);
router.put("/:id", isAdmin, userTypesController.updateById);
router.delete("/:id", isAdmin, userTypesController.deleteById);
router.get("/", userTypesController.getAll);
router.get("/:id", userTypesController.getById);

module.exports = router;