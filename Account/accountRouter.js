const express = require("express");
const router = express.Router();
const path = require("path");
router.get("/", (req, res)=>{
	res.sendfile(path.join(__dirname + "/account.html"));
});

router.delete('/users/:id', (req, res) => {
  User.delete(req.params.id);
  console.log(`Deleted user \`${req.params.id}\``);
  res.status(204).end();
});

module.exports= router; 
