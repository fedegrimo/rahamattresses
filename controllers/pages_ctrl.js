const path = require("path");

const PAGES_CTRL = {
    index: (req,res) => {
        res.sendFile(path.join(__dirname,"../views/index.html"));
    },
    wellness: (req,res) => {
        res.sendFile(path.join(__dirname,"../views/wellness.html"));
    },
    essential: (req,res) => {
        res.sendFile(path.join(__dirname,"../views/essential.html"));
    },
    balance: (req,res) => {
        res.sendFile(path.join(__dirname,"../views/balance.html"));
    },
    about: (req,res) => {
        res.sendFile(path.join(__dirname,"../views/aboutus.html"));
    }
}

module.exports = PAGES_CTRL;