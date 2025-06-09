// src/routes/chossure.routes.js
const express = require('express');
const router = express.Router();
const chossureController = require('../controllers/chossure.controller');

router.get('/', chossureController.getAll); 

module.exports = router;
