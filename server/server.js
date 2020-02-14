const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const config = require('./config/config').get(process.env.NODE_ENV);
 
mongoose.Promise = global.Promise;
mongoose.connect(config.DATABASE, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  useFindAndModify: false 
});

const app = express();
require("./api/parser")(app);
require("./api/routes")(app);

app.use(bodyParser.json());

const port = process.env.PORT || 3001;

app.listen(port, (err)=>{
  if(err) {
    console.log("SERVER ERROR!!!", err);
    process.exit(1);
  }
  console.log('SERVER RUNNING!!!');
});
