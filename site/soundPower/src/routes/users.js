var express = require('express');
var router = express.Router();
var controller = require('../controllers/usersController.js');
const {check, validationResult, body} = require('express-validator');
const loginValidator = require('../validator/loginValidator.js');
const registerValidator = require('../validator/registerValidator.js');
const uploadAvatar = require('../middlewares/upAvatar')

/* POST register page */
router.get('/register', controller.register);
router.post('/register',uploadAvatar.any(), registerValidator,controller.processRegister);
//router.post('/register',controller.save)

router.get('/login', controller.Login)
router.post('/login',loginValidator,controller.processLogin)

router.get('/profile',controller.profile)
router.post('/profile', controller.processProfile)

module.exports = router;