const fs = require('fs');
const path = require('path');

const traductorFilePath = path.join(__dirname, '../data/traductor.json');
const traductor = JSON.parse(fs.readFileSync(traductorFilePath, 'utf-8'));


const controller = {
	index: (req, res) => {
        res.render('index', { traductor});
	},
	wellness: (req, res) => {
		res.render('wellness', { traductor});
	},
    essential: (req, res) => {
        res.render('essential', { traductor});
	},
    balance: (req, res) => {
        res.render('balance', { traductor});
	},
    about: (req,res) => {
        res.render('aboutus', { traductor});
    }
};

module.exports = controller;
