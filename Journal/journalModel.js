const mongoose =require("mongoose")

const clientItemsSchema = mongoose.Schema({
	id:{type:String},
	URL:{type:String},
	title:{type:String},
	description:{type:String}
});
clientItemsSchema.methods.apiRepr = function(){
	return{
		URL:this.URL,
		title:this.title,
		description:this.description
	}
}
const ClientItem = mongoose.model("ClientItems", clientItemsSchema);

module.exports = {ClientItem};