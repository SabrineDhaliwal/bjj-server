const router = require('express').Router();
const upload = require('../middleware/multer')

const profileController = require('../controllers/profileController')

router.route('/:id').get(profileController.getProfileDetails)

router.route('/edit/:id')
.patch(upload.single("image"), profileController.updateProfile)
.get(profileController.getProfileDetails)
.post(upload.single('image'), profileController.createProfile);


module.exports = router;