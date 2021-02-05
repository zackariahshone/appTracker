    const express = require('express');
    const path = require('path');
    const router = express.Router();

    router.get('/', function(req, res){
        res.sendFile(path.join(__dirname, "../public/html/index.html"))
    })

    router.get('/addapp', (req, res)=>{
        res.sendFile(path.join(__dirname,'../public/html/addResume.html'))
    })
    router.get('/allapps',(req, res)=>{
        res.sendFile(path.join(__dirname,'../public/html/trackresume.html'))
    })

    module.exports = router;