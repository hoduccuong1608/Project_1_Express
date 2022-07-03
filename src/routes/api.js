const express = require('express')
const router = express.Router();
const apiController = require('../app/controllers/ApiController')

router.post('/login', apiController.login);
router.get('/users', apiController.users);
router.get('/staffs', apiController.staffs)

module.exports = router;