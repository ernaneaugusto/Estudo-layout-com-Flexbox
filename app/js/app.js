angular.module('qmagico', []);
angular.module('qmagico').controller("qmagicoContoller", function($scope){
	$scope.teste = "qualquer coisa";

	$scope.plataforma = {	};

	$scope.respondePlataforma = function(plataforma){
		console.log(plataforma);
	}
});
