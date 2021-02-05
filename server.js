const express = require('express');
// const PORT = process.env.PORT || 8000;
const app = express();
const appRoutes = require ('./routes/applications.js');


const db = require('./models');

app.use(express.urlencoded({
    extended:true
}));

require("./routes/htmlroutes.js")(app);
app.use(appRoutes);
app.use(express.static('public'));

db.sequelize.sync().then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`listening on port number:  ${PORT}`);
    })
})