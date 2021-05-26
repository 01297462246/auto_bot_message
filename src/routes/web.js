require('dotenv').config();
const express = require("express");
const chatBotController = require("../controllers/chatBotController");
const homePageController = require('../controllers/homePageController');
let router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

let initWebRoutes = (app) => {
    // router.get("/", (req, res) => {
    //     return res.json("Hello word");//json - sendFile - send 
    // });
    router.get("/", homePageController.getHomePage);
    router.get("/webhook", chatBotController.getWebhook);
    router.post("/webhook", chatBotController.postWebhook);
    return app.use("/", router);
};

module.exports = initWebRoutes;