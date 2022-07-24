const {Router} = require('express');
const router = Router();
const reviewsController = require('../controllers/Review.Controller');
const isAdmin = require('../middlewares/admin.middleware');


router.post("/", reviewsController.addReview);
router.put("/:id", isAdmin, reviewsController.updateById);
router.delete("/:id", isAdmin, reviewsController.deleteById);
router.get("/", reviewsController.getAll);
router.get("/:id", reviewsController.getById);

module.exports = router;