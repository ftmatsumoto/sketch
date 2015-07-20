var initialValue = 16;
var cancel = false;

$(document).ready(function(){

	createGrid(initialValue);

	$(".grid").on("mouseenter", function(){
		$(this).css("background", "#FFFFFF");
	});

	$("#new").on("click", function(){
		newGrid();
		if (cancel == false){
			$(".grid").on("mouseenter", function(){
				$(this).css("background", "#FFFFFF");
			});
		}
	});

	$("#clear").on("click", function(){
		$(".grid").css({"background": "#171B99", "opacity": 1}).removeClass("colored");

	});

});

function createGrid(n) {

	var size = (500 - 2*n)/n;
	var container = $("#container").html("");
	for (var j = 0; j < n; j++) {
		for (var i = 0; i < n; i++) {
			container.append( $("<div></div>").addClass("grid").height(size).width(size) );
		}
		container.append($("<div></div>").css("clear", "both"));
	}
}

function newGrid() {
	var userValue = parseInt(window.prompt("Choose the number of square grids (from 1 to 64)","32"));
	if (userValue>=1 && userValue<=64) {
		cancel = false;
		createGrid(userValue);
	} else if (userValue == null) {
		cancel = true;
	} else {
		cancel = true;
	}
}