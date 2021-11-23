// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

router.get('/', mainController.index); 
router.get('/essential', mainController.essential); 
router.get('/wellness', mainController.wellness); 
router.get('/balance', mainController.balance); 
router.get('/about', mainController.about); 

module.exports = router;