var toggleModal = function(){
	$('#modal').toggleClass("closed");
	$('#modal-overlay').toggleClass("closed");
}

$('#close-button').on("click", function() {
	toggleModal();
});

$("#submit").on("click", function(event){
	event.preventDefault();
	var clearForm = function(){
		$("#name").val('');
		$("#photo").val('');
		for (var i = 0; i < 10; i++) {
			$('#q'+i).val('');
		}
	}

	var userData = {
		name: $("#name").val().trim(),
		photo: $("#photo").val().trim(),
		scores: [	$("#q0").val(), 
					$("#q1").val(), 
					$("#q2").val(), 
					$("#q3").val(), 
					$("#q4").val(), 
					$("#q5").val(), 
					$("#q6").val(), 
					$("#q7").val(), 
					$("#q8").val(), 
					$("#q9").val()
				]
	}

	$.post(window.location.origin + "/api/friends", userData, function(data){
		$("#matchName").text(data.name);
		$('#matchImg').attr("src", data.photo).attr("alt", data.name);
    	toggleModal();
	});

	clearForm();
});