var Images = {
	imgsDB: 
	[
	["Bae1x1.jpg", 
	"Bae1x2.jpg", 
	"Bae1x3.jpg", 
	"Bae1x4.jpg", 
	"Bae1x5.jpg"],
	["Bae2x1.jpg",
	"Bae2x2.jpg",
	"Bae2x3.jpg",
	"Bae2x4.jpg",
	"Bae2x5.jpg"],
	["Bae3x1.jpg",
	"Bae3x2.jpg",
	"Bae3x3.jpg",
	"Bae3x4.jpg",
	"Bae3x5.jpg"]
	],
	imgpos: [0, 0, 0, 0, 0]
	
}

function placeImage(imgpos1, imgToggle) {
	Images.imgpos[imgpos1 - 1] = imgToggle;        // Set image pointer in Object array
	var imageName = "#img" + imgpos1.toString();   // create JQUERY handler
	$(imageName).attr("src", "./img/" + Images.imgsDB[imgToggle][imgpos1 - 1]);

}

function setImagesRandom() {
	for (var i=1; i <= 5; i++)
	{
		var num1 = Math.floor ((Math.random() * 3));
		placeImage(i, num1);
	}
}

function imageClick(imgpos1) {
	var imgToggle = Images.imgpos[imgpos1 - 1];
	if (imgToggle === 0) {
		placeImage(imgpos1, 1);
	}
	else if (imgToggle === 1) {
		placeImage(imgpos1, 2);
	}
	else if (imgToggle === 2) {
		placeImage(imgpos1, 0);
	}
	
}

function checkSet() {
	var setImg = Images.imgpos[0];
	var setFlag = true;
	for (var i=1; i < 5; i++)
	{
		if (Images.imgpos[i] !== Images.imgpos[i - 1]) {
			setFlag = false;
		}
	}

	if (setFlag) {
		$('img').css("box-shadow", "4px 4px 9px red");
		setTimeout(function() {alert("Xếp đúng rồi nèeeeeeeee");}, 1000);
	}
	else {
		$('img').css("box-shadow", "2px 3px 3px black")
	}

}

var main = function () 
{

	setImagesRandom();

	$("#img1").click(function(){
		imageClick(1);
		checkSet();
	})
	$("#img2").click(function(){
		imageClick(2);
		checkSet();
	})
	$("#img3").click(function(){
		imageClick(3);
		checkSet();
	})
	$("#img4").click(function(){
		imageClick(4);
		checkSet();
	})
	$("#img5").click(function(){
		imageClick(5);
		checkSet();
	})

}

$(document).ready(main());
