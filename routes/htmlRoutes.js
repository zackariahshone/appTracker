const path = require("path");

module.exports = (app)=>{
    app.get('/', function(req, res){
        res.sendFile(path.join(__dirname, "../public/html/index.html"))
    })
}