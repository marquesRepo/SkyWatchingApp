const express = require("express");
const router = express.Router();
const path = require("path");
router.get("/", (req, res)=>{
	res.sendfile(path.join(__dirname + "/account.html"));
});
module.exports= router; 