// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

router.get('/', mainController.index); 
router.get('/:id', mainController.index); 
router.get('/essential/:id', mainController.essential); 
router.get('/wellness/:id', mainController.wellness); 
router.get('/balance/:id', mainController.balance); 
router.get('/about/:id', mainController.about); 

module.exports = router;