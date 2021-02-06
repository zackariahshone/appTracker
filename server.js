const express = require('express');
// const port = process.env.PORT || 8000;
const path = require('path');
const app = express();
const appRoutes = require ('./routes/applications.js');
const htmlRoutes = require('./routes/htmlRoutes')


const db = require('./models');

app.use(express.urlencoded({
    extended:true
}));

app.use(appRoutes);
app.use(htmlRoutes);
app.use(express.static(path.join(__dirname,'public')));

db.sequelize.sync().then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        // console.log(`listening on port number:  ${port}`);
    })
})