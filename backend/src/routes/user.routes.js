const router = require('express').Router();
const {createUser, login, getByID, getAllUsers, updateUser, deleteUser} = require('../controllers/user.controller')
const auth = require('../middlewares/auth.middleware')
router.post('/users/create',createUser);
router.post('/users/login',login);
router.get('/users/:id',getByID);
router.get('/all',getAllUsers);
router.put('/users/:id',auth,updateUser);
router.delete('/users/:id',auth,deleteUser);
module.exports = router;