const express = require('express')
const router = express.Router();
const apiController = require('../app/controllers/ApiController')

router.post('/login', apiController.login);
router.get('/users/:id', apiController.users);
router.get('/staffs', apiController.staffs);
router.post('/customers/add', apiController.addCustomer);
router.get('/customers/list', apiController.getListCustomers);
router.get('/customers/:id', apiController.getByID);
router.post('/customers/update', apiController.updateCustomer);
module.exports = router;