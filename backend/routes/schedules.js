const {Router} = require('express');
const router = Router();
const scheduleController = require('../controllers/Schedule.Controller');
const isAdmin = require('../middlewares/admin.middleware');


router.post("/", isAdmin, scheduleController.addSchedule);
router.put("/:id", isAdmin, scheduleController.updateById);
router.delete("/:id", isAdmin, scheduleController.deleteById);
router.get("/", scheduleController.getAll);
router.get("/:id", scheduleController.getById);

module.exports = router;