require('dotenv').config();
const express = require("express");
const viewEngine = require("./config/viewEngine");
const initWebRoute = require("./routes/web");
const bodyParser = require("body-parser");
const initWebRoutes = require("./routes/web");

let app = express();

//config view engine
viewEngine(app);

//use body-parser to post data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//init all web routes
initWebRoutes(app);

let port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`App is running at the port ${port}`);
});