const express = require("express");

// Config view engine for node app

let configEngineApp = (app) => {
    app.use(express.static("./src/public"));
    app.set("view engine", "ejs");
    app.set("views", "./src/views");
}

module.exports = configEngineApp;