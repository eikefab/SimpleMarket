const express = require('express');
const router = express.Router();

const authController = require('./auth/auth');
// todo: profile controller
// todo: cart controller

router.post('/register', authController.register);
router.post('/login', authController.login);

router.use('/profile', authController.validate);
router.use('/cart', authController.validate);

router.get('/profile', profileController.getUserProfile);

router.get('/profile/settings', profileController.getUserSettings);
router.post('/profile/settings/', profileController.changeUserSettings);

router.get('/cart', cartController.indexProducts);




module.exports = router;