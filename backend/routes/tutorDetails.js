const {Router} = require('express');
const router = Router();
const tutorDetailsContorller = require('../controllers/TutorDetails.Controller');
const isAdmin = require('../middlewares/admin.middleware');


router.post("/", tutorDetailsContorller.addTutorDetails);
router.post("/availability", tutorDetailsContorller.addTutorAvailability);
router.put("/:id", isAdmin, tutorDetailsContorller.updateById);
router.delete("/availability", tutorDetailsContorller.deleteTutorAvailability);
router.delete("/:id", isAdmin, tutorDetailsContorller.deleteById);
router.get("/", tutorDetailsContorller.getAll);
router.get("/:id", tutorDetailsContorller.getById);

module.exports = router;