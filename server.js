const ENDPOINTS = require ('./endpoint');
const PAGES_CTRL = require ('./controllers/pages_ctrl');
const express = require("express");
const app = express();
const startServer = require('./config_app');

const port = process.env.PORT ||  3000;

app.use("/css",express.static("public/css"));
app.use("/images",express.static("public/img"));

app.get(ENDPOINTS.INDEX,PAGES_CTRL.index);

app.get(ENDPOINTS.ABOUT,PAGES_CTRL.about);

app.get(ENDPOINTS.BALANCE,PAGES_CTRL.balance);

app.get(ENDPOINTS.ESSENTIAL,PAGES_CTRL.essential);

app.get(ENDPOINTS.WELLNESS,PAGES_CTRL.wellness);



startServer(app,port);
