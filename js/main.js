// array of objects to store zodiac data
var birthFlower = [
    {
        month: "January",
        flower: "Carnation",
        meaning: "The flower associated with the month is Carnation and is said to symbolise love, fascination and distinction. Carnation, which is also commonly called Gillyflower, is found in a number of colors from pink to red-purple.",
        image: "img/jan.png"
    },

    {
        month: "February",
        flower: "Violet",
        meaning: "The flower symbolises faithfulness, humility and chastity. Gifting violets in the Victorian era conveyed the message 'I’ll always be true’. The flower is found in shades of blue, mauve as well as yellow and cream.",
        image: "img/feb.png"
    },
    {
        month: "March",
        flower: "Daffodil",
        meaning: "This month is synonymous with the onset of spring (in the Northern Hemisphere). Accordingly, the flower associated with this month is Daffodil, also known as Jonquil or Narcissus. The colours of the bloom include white, yellow and orange.",
        image: "img/march.png"
    },
    {
        month: "April",
        flower: "Sweat Pea",
        meaning: "This month is associated with Sweet pea flower which bloom in a wide range of soft colors as well as two tone colours. It is said to symbolise pleasure or good-bye. In the Victorian era, these flowers formed a part of the bouquet which was sent to someone to convey gratefulness.",
        image: "img/april.jpg"
    },

    {
        month: "May",
        flower: "Lily",
        meaning: "The month of May is associated with the Lily of the valley flower. It is generally white in colour. The flower conveys sweetness and humility.",
        image: "img/may.jpg"
    },

    {
        month: "June",
        flower: "Rose",
        meaning: "Rose is the flower of this month. Though roses are available in many colors from red to pink to white to yellow, all with their own special meanings, the underlying message the flowers convey is that of love and passion.",
        image: "img/june.jpg"
    },

    {
        month: "July",
        flower: "Larkspur",
        meaning: "Larkspur is the flower for July. With its simple form, feelings of open heart and ardent attachment are attributed to it.",
        image: "img/july.jpg"
    },

        {
        month: "August",
        flower: "Gladiolus",
        meaning: "The flower for this month is the Gladiolus. It blooms in a variety of colours like red, pink, white, yellow and orange. It stands for sincerity and symbolises strength of character.",
        image: "img/august.jpg"
    },

        {
        month: "September",
        flower: "Aster",
        meaning: "Aster or September flower is the flower for this month. It is found in a number of colours – pink, red, white, lilac and mauve. The name of the flower which looks like a star is derived from the Greek word for star. The flower symbolises love, faith, wisdom and colour.",
        image: "img/sept.jpg"
    },

        {
        month: "October",
        flower: "Marigold",
        meaning: "Marigold or Calendula is the flower associated with October. For the Hindus, the month of October is associated with festivals like Dusshera and Diwali and Marigold, although a relatively recent introduced flower from the New World, has come to be an auspicious flower is part of religious ceremonies. However, in the English culture, marigold stands for sorrow and sympathy, perhaps derivative of its original symbolic association with death in the traditions of Mexico, as in the Day of the Dead, parallel to the Lily in Europe.",
        image: "img/oct.jpg"
    },

        {
        month: "November",
        flower: "Chrysanthemum",
        meaning: "Chrysanthemum, which stands for cheerfulness and love, is associated with the month of November. According to Feng Shui, Chrysanthemums bring happiness and laughter in the house.",
        image: "img/nov.jpg"
    },

        {
        month: "December",
        flower: "Poinsettia",
        meaning: "These flowers are typically associated with Christmas. While considered by the ancient Aztecs to be symbols of purity, in today's language of flowers, red, white or pink poinsettias, the December birth flower, symbolize good cheer and success and are said to bring wishes of mirth and celebration.",
        image: "img/dec.jpg"
    }
];


function findSign() {
	var userInput = document.getElementById("userInput").value;
    //loop through the birthFlower array one at a time
	for (i=0; i<birthFlower.length; i++){
        //if the value the user entered is equal to one of our months, then we do something
		if (userInput === birthFlower[i].month) {
			document.getElementById("flower").textContent = birthFlower[i].flower
			document.getElementById("flowerImage").src = birthFlower[i].image
			document.getElementById("flowerMeaning").textContent = birthFlower[i].meaning
			return
		}
	}

}


