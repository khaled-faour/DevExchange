const {Router} = require('express');
const router = Router();
const votesController = require('../controllers/Vote.Controller');
const isAdmin = require('../middlewares/admin.middleware');


router.post("/", votesController.addVote);
router.put("/:id", votesController.updateById);
router.delete("/:id", votesController.deleteById);
router.get("/", votesController.getAll);
router.get("/:id", votesController.getById);

module.exports = router;