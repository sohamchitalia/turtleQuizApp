(function(){
	angular
	.module("turtleFacts")
	.controller("listCtrl", ListController);

	ListController.$inject = ['quizMetrics', 'DataService'];

	function ListController(quizMetrics, DataService){

		//this.dummyData = "hello world"; 
		var vm = this;

		vm.quizMetrics = quizMetrics;
		vm.data = DataService.turtlesData;
		vm.activeTurtle = {};
		vm.changeActiveTurtle = changeActiveTurtle;
		
		//vm.quizActive = false;
		vm.activateQuiz = activateQuiz;
		vm.search = "";

		function changeActiveTurtle(index){
			vm.activeTurtle = index;
		}
		
		function activateQuiz(){
			
			quizMetrics.changeState(true) ;
		}

	}

	
})();