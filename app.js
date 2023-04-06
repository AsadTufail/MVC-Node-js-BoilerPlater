require("dotenv").config({ path: "./.env" });
const express = require('express');
const ejsLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;

const indexRoutes = require('./routes');

mongoose.connect(process.env.MongoDB_URl, { useNewUrlParser: true , useUnifiedTopology: true, dbName: 'domainster'});

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('layout', 'layouts/layout');
app.use(ejsLayouts);
app.set('view engine', 'ejs')

app.use('/', indexRoutes);

app.listen(PORT, function(){
  console.log(`Server listening on port ${PORT}`);
});