const express = require("express");
const router = express.Router();
const path = require("path");
const {AstroItem} = require("./browserModel")
const {ClientItem} = require("../Journal/journalModel")
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
router.get("/", (req, res)=>{
	res.sendfile(path.join(__dirname + "/browser.html"));
});


router.get("/astroitems", (req, res)=>{

	AstroItem
		.find()
		.then(astroitems => {
      console.log(astroitems)
			res.json(astroitems.map(AstroItem=> AstroItem.apiRepr()));
		})
});
router.post('/journal/:id', jsonParser, (req, res) => {
  const requiredFields = [];
  for (let i=0; i<requiredFields.length; i++) {
    const field = requiredFields[i];
    if (!(field in req.body)) {
      const message = `Missing \`${field}\` in request body`
      console.error(message);
      return res.status(400).send(message);
    }
  }
  if (req.params.id !== req.body.id) {
    const message = `Request path id (${req.params.id}) and request body id (${req.body.id}) must match`;
    console.error(message);
    return res.status(400).send(message);
  }
  console.log(`Updating shopping list item \`${req.params.id}\``);
  ClientItem.create({
    id: req.params.id,
    URL: req.body.URL,
    description: req.body.description
  });
  res.status(204).end();
});

module.exports= router; 
