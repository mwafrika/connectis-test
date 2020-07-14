const express = require('express');
const  bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`le serveur s\'excute sur le port ${PORT}`));
module.export = app;




