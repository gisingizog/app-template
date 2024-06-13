const router = require('express').Router();
const {createEmployee} = require('../controllers/employee.controller');

router.post('/create',createEmployee);

module.exports = router;