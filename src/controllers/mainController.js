const fs = require('fs');
const path = require('path');

const traductorFilePath = path.join(__dirname, '../data/traductor.json');
const traductor = JSON.parse(fs.readFileSync(traductorFilePath, 'utf-8'));


const controller = {
	index: (req, res) => {
        language = req.params.id;
        route = "/";
        res.render('index', {language,route });
	},
	wellness: (req, res) => {
        language = req.params.id;
        route = "/wellness/";
		res.render('wellness', {language,route });
	},
    essential: (req, res) => {
        language = req.params.id;
        route = "/essential/";
        res.render('essential', {language,route });
	},
    balance: (req, res) => {
        language = req.params.id;
        route = "/balance/";
        res.render('balance', { language,route });
	},
    about: (req,res) => {
        language = req.params.id;
        route = "/about/";
        res.render('aboutus', { language,route });
    }
};

module.exports = controller;
