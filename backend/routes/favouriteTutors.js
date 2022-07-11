const {Router} = require('express');
const router = Router();
const favouriteTutorsContorller = require('../controllers/FavouriteTutor.Controller');
const isAdmin = require('../middlewares/admin.middleware');


router.post("/", favouriteTutorsContorller.addFavouriteTutor);
router.put("/:id", isAdmin, favouriteTutorsContorller.updateById);
router.delete("/:id", favouriteTutorsContorller.deleteById);
router.get("/", favouriteTutorsContorller.getAll);
router.get("/:id", favouriteTutorsContorller.getById);

module.exports = router;