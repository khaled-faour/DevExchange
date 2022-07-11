const {Router} = require('express');
const router = Router();
const votesController = require('../controllers/Vote.Controller');
const isAdmin = require('../middlewares/admin.middleware');


router.post("/", isAdmin, votesController.addVote);
router.put("/:id", isAdmin, votesController.updateById);
router.delete("/:id", isAdmin, votesController.deleteById);
router.get("/", votesController.getAll);
router.get("/:id", votesController.getById);

module.exports = router;