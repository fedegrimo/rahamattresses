const log = require ('./utils');
function startServer(app,port){
    app.listen(port,() => {
        log("start server!");
    });
}

module.exports = startServer;