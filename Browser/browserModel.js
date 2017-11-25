const mongoose =require("mongoose")

const astroItemSchema = mongoose.Schema({
	id:{type:String},
	URL:{type:String},
	title:{type:String},
	description:{type:String}
});
astroItemSchema.methods.apiRepr = function(){
	return{
		id:this.id,
		URL:this.URL,
		title:this.title,
		description:this.description
	}
}
const AstroItem = mongoose.model("AstroItems", astroItemSchema);

module.exports = {AstroItem};