const express = require('express')
const router = express.Router();
const apiController = require('../app/controllers/ApiController')

router.post('/login', apiController.login);
router.get('/users', apiController.users);
router.get('/staffs', apiController.staffs);
router.post('/insert', apiController.insert);
router.get('/customers', apiController.customers);

module.exports = router;