const {Router} = require('express');
const router = Router();
const onholdCoinsController = require('../controllers/OnholdCoins.Controller');
const isAdmin = require('../middlewares/admin.middleware');


router.post("/", onholdCoinsController.addOnholdCoins);
router.put("/:id", isAdmin, onholdCoinsController.updateById);
router.delete("/:id", isAdmin, onholdCoinsController.deleteById);
router.get("/", onholdCoinsController.getAll);
router.get("/:id", onholdCoinsController.getById);

module.exports = router;