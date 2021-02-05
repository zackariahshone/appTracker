const path = require("path");

module.exports = (app)=>{
    app.get('/', function(req, res){
        res.sendFile(path.join(__dirname, "../public/html/index.html"))
    })

    app.get('/addapp', (req, res)=>{
        res.sendFile(path.join(__dirname,'../public/html/addResume.html'))
    })
    app.get('/allapps',(req, res)=>{
        res.sendFile(path.join(__dirname,'../public/html/trackresume.html'))
    })
}