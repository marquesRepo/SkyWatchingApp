const express = require("express");
const router = express.Router();
const path = require("path");
const {ClientItem} = require("./journalModel")
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
router.get("/", (req, res)=>{
	res.sendFile(path.join(__dirname + "/journal.html"));
});
 

router.get("/journalitem", (req, res)=>{
	ClientItem
		.find()
		.then(journalitem => {
			res.json(journalitem.map(ClientItem=> ClientItem.apiRepr()));
		})
});
module.exports= router;