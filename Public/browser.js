const GET_API = "/API.json"
function getDataFromAPI(callback){
	console.log('making request')
	
}

function renderResult(result){
	//console.log(result)
	result.astroItems.forEach((item)=>{
		console.log(item)
			$(".js-results").append(`<div>
				<a href="/itemModel"><img class= "imageThumbnail" src="${item.URL}"></a>
			</div>	`)
	})

}
	$.ajax({
		url: GET_API,
		dataType: 'json',
		type: "get",
		success: renderResult
	});
