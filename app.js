const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const res = require('express/lib/response');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/public/")));

app.set("views","./src/views");
app.set("view engine","ejs");

app.get("/",(req,res) =>{

    res.render('index',{username: 'User1', customers: ["dev","dev2","dev3"]});

})

app.listen(PORT,() =>{

    debug("Listening on port", chalk.green(" : ",PORT));

})