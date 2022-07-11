const {Router} = require('express');
const router = Router();
const transactionsController = require('../controllers/Transaction.Controller');
const isAdmin = require('../middlewares/admin.middleware');


router.post("/", isAdmin, transactionsController.addTransaction);
router.put("/:id", isAdmin, transactionsController.updateById);
router.delete("/:id", isAdmin, transactionsController.deleteById);
router.get("/", transactionsController.getAll);
router.get("/:id", transactionsController.getById);

module.exports = router;