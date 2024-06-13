const router = require('express').Router();
const {createUser, login, getByID, getAllUsers, updateUser, deleteUser} = require('../controllers/user.controller')
const auth = require('../middlewares/auth.middleware')
router.post('/create',createUser);
router.post('/login',login);
router.get('/:id',getByID);
router.get('/all',getAllUsers);
router.put('/:id',auth,updateUser);
router.delete('/:id',auth,deleteUser);
module.exports = router;