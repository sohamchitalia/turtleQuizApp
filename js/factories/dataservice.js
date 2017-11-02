(function(){

angular.module("turtleFacts")
 .factory("DataService", DataFactory);

	function DataFactory(){
		var dataObj = {
			turtlesData: turtlesData,
			quizQuestions: quizQuestions

		};
		
		return dataObj;
	}

	var quizQuestions = [

	{
		type: "text",
		text: "How much can a loggerhead weigh?",
		possibilities: [
		{
			answer: "Upto 20 kg"
		},
		{
			answer: "Upto 50 kg"
		
		},
		{
			answer: "Upto 70 kg"
		},
		
		{
			answer: "Upto 100 kg"
		}

		],
		selected: null,
		correct: null
	},

	{
		type: "text",
		text: "How much does onion weigh?",
		possibilities: [
		{
			answer: "Upto 20 kg"
		},
		{
			answer: "Upto 50 kg"
		},
		{
			answer: "Upto 70 kg"
		},
		{
			answer: "Upto 100 kg"
		}

		],
		selected: null,
		correct: null
	},

	{
		type: "image",
		text: "How much can a loggerhead weigh?",
		possibilities: [
		{
			answer: "Upto 20 kg"
		},
		{
			answer: "Upto 50 kg"
		
		},
		{
			answer: "Upto 70 kg"
		},
		
		{
			answer: "Upto 100 kg"
		}

		],
		selected: null,
		correct: null
	}




];

	var turtlesData = [
	{
		type: "Green Turtle",
		img: "not yet",
		locations: "mumbai",
		size: "hugeeee",
		lifespan:"too long",
		diet: "too much",
		description: "hellooooo"

	},

	{
		type: "Yellow Turtle",
		img: "not yet",
		locations: "Goa",
		size: "hugeeee",
		lifespan:"too long",
		diet: "too much",
		description: "hellooooo"

	},

	{
		type: "Blue Turtle",
		img: "noww yet",
		locations: "Delhi",
		size: "hugeeee",
		lifespan:"too long",
		diet: "too much",
		description: "hellooooo"

	}

];


})();