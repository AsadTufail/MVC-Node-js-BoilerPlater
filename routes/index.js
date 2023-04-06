const express = require('express');
const router = express.Router();

const indexControllers = require('../controllers');

router.get('/', indexControllers.Index);

module.exports = router;
