const {Router} = require('express');
const router = Router();
const bundleController = require('../controllers/Bundle.Controller');
const isAdmin = require('../middlewares/admin.middleware');


router.post("/", isAdmin, bundleController.addBundle);
router.put("/:id", isAdmin, bundleController.updateById);
router.get("/", bundleController.getAll);
router.get("/:id", bundleController.getById);
router.delete("/:id", bundleController.deleteById);

module.exports = router;