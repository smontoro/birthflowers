// array of objects to store zodiac data
var birthFlower = [
    {
        month: "January"
        meaning: "poop"
        image: "img/jan.jpg"
    },

    {
        month: 
        meaning: 
        image: "img/"
    },
    {
        month:
        meaning: 
        image: "img/"
    },
    {
        flower: 
        meaning: 
        image: "img/"
    },
     {
        flower: 
        meaning: 
        image: "img/"
    },
    {
        flower: 
        meaning: 
        image: "img/"
    },
    {
        flower: 
        meaning: 
        image: "img/"
    },
    {
        flower: 
        meaning: 
        image: "img/"
    },
    {
        flower: 
        meaning: 
        image: "img/"
    },
    {
        flower: 
        meaning: 
        image: "img/"
    },
      {
        flower: 
        meaning: 
        image: "img/"
    },
    {
        flower: 
        meaning: 
        image: "img/"
    }
];


function findSign() {
	var userInput = document.getElementById("userInput").value;
	for (i=0; i<birthFlower.length; i++){
		if (userInput === birthFlower[i].sign) {
			document.getElementById("flowerMonth").textContent = zodiac[i].sign
			document.getElementById("flowerImage").src = zodiac[i].image
			document.getElementById("flowerMeaning").textContent = zodiac[i].fortune
			return
		}
	}
document.getElementById("flowerMonth").textContent = "not a sign, try again"

}










