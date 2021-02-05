const { faUser } = require('@fortawesome/free-regular-svg-icons');
const { faAppleAlt } = require('@fortawesome/free-solid-svg-icons');
const express = require('express');
const appl = require('../controllers/appCont');

// const db = require('../models');

const router = express.Router();

router.get('/getData',(req, res)=>{
    appl.findAll(req,res);
});

router.post('/appData', (req, res)=>{
  appl.create(req, res);
});

router.delete('/deletedata', (req, res)=>{
    appl.delete(req, res).then((res)=>{
        console.log(res);
    })
});

module.exports = router;

