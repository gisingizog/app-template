const router = require('express').Router();
const {createUser} = require('../controllers/user.controller')

router.post('/users/create',createUser);
module.exports = router;