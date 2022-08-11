const express = require("express");
const userRroutes = require("../routes/users.routes")

function configureApp(app) {
    //configuracion

    app.set("port", process.env.PORT)

    app.use(express.json())

    app.get("/", (req, res) => {
        res.json({
            "name": "API Movies",
            "description": "Example CRUD API Movies",
            "version": "V1"
        })
    })

    app.use("/api", userRroutes);

    return app;
}

module.exports = configureApp
