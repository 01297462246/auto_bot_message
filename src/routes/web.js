const express = require("express");
const homePageController = require('../controllers/homePageController');
let router = express.Router();

let initWebRoutes = (app) => {
    // router.get("/", (req, res) => {
    //     return res.json("Hello word");//json - sendFile - send 
    // });
    router.get("/", homePageController.getHomePage);
    return app.use("/", router);
};

module.exports = initWebRoutes;