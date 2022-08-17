require("dotenv").config();
const express = require("express");

const configureApp = require("./config/app")

const app = configureApp(express());


app.listen(app.get("port"), () => {
	console.log(`server listening on port ${app.get("port")}`)
});

