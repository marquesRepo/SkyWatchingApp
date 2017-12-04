const GET_API = "/browser/astroitems";
const POST_API = "/browser/journal/";
let current_Item; 
function getDataFromAPI(callback){
	console.log('making request')
	
}

function renderResult(result){
	//console.log(result)
	result.forEach((item)=>{
			$(".js-results").append(`<div class="masterItem">
				<a class="thumbnailLink" href="#" data-image="${item.URL}" data-id="${item.id}" data-title="${item.title}" data-description="${item.description}">
				<img class= "imageThumbnail" src="${item.URL}"></a>
			</div>	`)
	})
showItem();
saveItem();
}

	$.ajax({
		url: GET_API,
		dataType: 'json',
		type: "get",
		success: renderResult
	});
function showItem(){
	$(".thumbnailLink").on("click", function(){
		let title = $(this).attr("data-title")
		let image = $(this).attr("data-image")
		let description = $(this).attr("data-description")
		let id = $(this).attr("data-id")
		current_Item = {
			id:id, 
			image:image,
			description:description,
			title:title
		}
		console.log(current_Item)
		$(".item-image").attr("src", image)
		$(".item-title").html(title)
		$(".item-description").html(description)
		$(".item-lightbox").removeClass("lightbox-hidden")
		$(".overlay").removeClass("lightbox-hidden")
	})
	$(".saveToJournal").on("click", function(){
		$(".item-lightbox").addClass("lightbox-hidden")
		$(".overlay").addClass("lightbox-hidden")
	})
}
function saveItem(){
	console.log("HOWDY")
	$(".saveToJournal").on("click", function(event){
		let title = $(this).attr("data-title")
		let image = $(this).attr("data-image")
		let description = $(".item-description").val()
		$(".item-image").attr("src", image)
		$(".item-title").html(title)
		$(".item-description").html(description)
		$.ajax({
			url: POST_API + current_Item.id,
			type:"post",
			dataType:"json",
			data: {
				id:current_Item.id,
				URL: current_Item.image,
				description:description
			},
			success: function(response){
				console.log(response);
				description.val("");
			}
		});
	});
}