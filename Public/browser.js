const GET_API = "/browser/astroitems";
const POST_API = "/journal/journalitem";
function getDataFromAPI(callback){
	console.log('making request')
	
}

function renderResult(result){
	//console.log(result)
	result.forEach((item)=>{
		console.log(item)
			$(".js-results").append(`<div class="masterItem">
				<a class="thumbnailLink" href="#" data-image="${item.URL}" data-title="${item.title}" data-description="${item.description}">
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
		let description = $(this).attr("data-description")
		$(".item-image").attr("src", image)
		$(".item-title").html(title)
		$(".item-description").html(description)
		$.ajax({
			url: POST_API,
			type:"post",
			data: "JSON",
			success: function(response){
				console.log(response);
				description.val("");
			}
		});
	});
}