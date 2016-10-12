(function(){
'use-strict'

var app = angular.module('LunchCheck', []);
app.controller('ValuesController', ValuesController)

ValuesController.$inject = ['$scope'];
function ValuesController($scope) {
	//Model for the values input
	$scope.values = "";
	//Message model
	$scope.message = "";

	$scope.hasDataEntered = null;

	$scope.check = function() {

		if($scope.values == "") {
			$scope.hasDataEntered = false;
			$scope.message = "Please enter data first!";
			return;
		}
		$scope.hasDataEntered = true;
		var items = $scope.values.split(',');
		var count = 0;
		for(var i in items) {
			var item = items[i];
			if(item.trim() == "") continue;
			count++;
		}
		if(count <= 3) {
			$scope.message = "Enjoy!"
		}
		else if(count > 3) {
			$scope.message = "Too much!";
		}
	};
};

})();