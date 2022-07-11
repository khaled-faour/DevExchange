const {Router} = require('express');
const router = Router();
const paymentsController = require('../controllers/Payment.Controller');
const isAdmin = require('../middlewares/admin.middleware');


router.post("/", isAdmin, paymentsController.addPayment);
router.put("/:id", isAdmin, paymentsController.updateById);
router.delete("/:id", isAdmin, paymentsController.deleteById);
router.get("/", paymentsController.getAll);
router.get("/:id", paymentsController.getById);

module.exports = router;