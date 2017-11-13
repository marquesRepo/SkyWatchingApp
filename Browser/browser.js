const GET_API = "/API.js"
function getDataFromAPI(callback){
	const settings = {
		dataType: 'json',
		type: "GET",
		success: callback
	};
	$.ajax(settings);
}

function renderResult(result){
	return `<div>
				<section>
				${result.URL}
				</section>
				<section>
				<h1>${result.title}</h1>
				<p>${result.description}</p>
				</section>
			</div>
	`
}
function getRecentStatusUpdates(callbackFn) {
    setTimeout(function(){ callbackFn(ASRTO_ITEMS)}, 100);
}

function displayStatusUpdates(data) {
    for (index in data.astroItems) {
       $('body').append(
        '<p>' + data.astroItems[index].text + '</p>');
    }
}

function getAndDisplayStatusUpdates() {
    getRecentStatusUpdates(displayStatusUpdates);
}

$(function() {
    getAndDisplayStatusUpdates();
})