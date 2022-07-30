const {Router} = require('express');
const router = Router();
const postContorller = require('../controllers/Post.Controller');
const isAdmin = require('../middlewares/admin.middleware');


router.post("/", postContorller.addPost);
router.put("/:id", postContorller.updateById);
router.delete("/:id", isAdmin, postContorller.deleteById);
router.get("/", postContorller.getAll);
router.get("/questions", postContorller.getAllQuestions);
router.get("/answers", postContorller.getAllAnswers);
router.get("/:id", postContorller.getById);

module.exports = router;