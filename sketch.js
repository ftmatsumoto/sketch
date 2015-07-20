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

	$("#random").on("click", function(){
		newGrid();
		if (cancel == false){
			$(".grid").on("mouseenter", function(){
				$(this).css("background", randomColor());
			});
		}
	});

	$("#opacity").on("click", function(){
		newGrid();
		if (cancel == false){
			$(".grid").on("mouseenter", function(){
				var opacity = $(this).css("opacity");
				if (opacity > 0.1) {
					$(this).css("opacity", opacity - 0.1);
				} else {
					$(this).css("opacity", 0);					
				}
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

function randomColor() {
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + "," + g + "," + b + ")"
}