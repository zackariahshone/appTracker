const express = require('express');
const db = require('../models');

const router = express.Router();

router.get('/getData',(req, res)=>{
    res.send("connected")
});

router.post('/appData', (req, res)=>{
  console.log('app infomation ', req);
});

module.exports = router;

