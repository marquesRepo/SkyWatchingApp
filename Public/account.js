const DELETE_ACCOUNT = "/users"

function deleteAccount(){
	$(".deleteButton").submit("click", function(){
		$.ajax({
		url: DELETE_ACCOUNT,
		dataType: 'json',
		type: "delete",
		success: renderResult
		});
	});
};