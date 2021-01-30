const express = require('express');
const PORT = process.env.PORT || 8000;
const app = express();
// const routes = require ('./routes');

const db = require('./models');

app.use(express.urlencoded({
    extended:true
}));

// app.use(routes);
app.use(express.static('public'));

db.sequelize.sync().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`listening on port number:  ${PORT}`);
    })
})