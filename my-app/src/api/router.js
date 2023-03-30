const express = require('express');
const { createUser, getAllUsers, login } = require('./controller');

const router = express.Router();

router.post('/user/create', createUser);
router.get('/user/getAll', getAllUsers);
router.post('/api/login', login);

module.exports = router;
