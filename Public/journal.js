const clientData = "/journal/journalitem"
	$.ajax({
		url: clientData,
		dataType: 'json',
		type: "get",
		success: renderResult
	});

	function renderResult(result){
			result.forEach((item)=>{
		console.log(item)
			$(".js-results").append(`<div class="masterItem">
				<a class="thumbnailLink" href="#" data-image="${item.URL}" data-title="${item.title}" data-description="${item.description}">
				<img class= "imageThumbnail" src="${item.URL}"></a>
			</div>	`)
	})
showItem();
}
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
	$(".exitButton").on("click", function(){
		$(".item-lightbox").addClass("lightbox-hidden")
		$(".overlay").addClass("lightbox-hidden")
	})
}