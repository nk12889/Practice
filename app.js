const bodyParser = require('body-parser');
const express = require('express');
const { format } = require('path');

app = express();

app.use(bodyParser.urlencoded({extended:false}))

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errRoutes = require('./routes/404');


app.use(adminRoutes);
app.use(shopRoutes);
app.use(errRoutes);




app.listen(3000,()=>{
    console.log(`Server is running on ${3000}`)
})











