const {Router} = require('express');
const router = Router();
const bundleController = require('../controllers/Bundle.Controller');
const isAdmin = require('../middlewares/admin.middleware');


router.post("/", isAdmin, bundleController.addBundle);
router.put("/:id", isAdmin, bundleController.updateById);
router.delete("/:id", isAdmin, bundleController.deleteById);
router.get("/", bundleController.getAll);
router.get("/:id", bundleController.getById);

module.exports = router;