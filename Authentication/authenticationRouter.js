const express = require("express");
const router = express.Router();
const path = require("path");
router.get("/login", (req, res)=>{
	res.sendfile(path.join(__dirname + "/login.html"));
});
module.exports= router; 
