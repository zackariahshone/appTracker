const express = require('express');
// const PORT = process.env.PORT || 8000;
const app = express();
const appRoutes = require ('./routes/applications.js');
require("./routes/htmlroutes.js")(app);


const db = require('./models');

app.use(express.urlencoded({
    extended:true
}));

app.use(appRoutes);
app.use(express.static('/public'));

db.sequelize.sync().then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`listening on port number:  ${PORT}`);
    })
})