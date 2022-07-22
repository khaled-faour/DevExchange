const {Router} = require('express');
const router = Router();
const commentController = require('../controllers/Comment.Controller');
const isAdmin = require('../middlewares/admin.middleware');


router.post("/", commentController.addComment);
router.put("/:id", isAdmin, commentController.updateById);
router.delete("/:id", commentController.deleteById);
router.get("/", commentController.getAll);
router.get("/:id", commentController.getById);

module.exports = router;