const express = require("express")
const router = express.Router()
const userController = require("../controllers/user.js")

router.get('/login', userController.login);
router.post('/login', userController.createLogin);
router.get('/signup', userController.signup);
router.post('/signup', userController.createSignup);
router.get('/logout', userController.logout);
router.get('/:id', userController.show);

module.exports = router