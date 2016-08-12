angular
	.module('apirest.edicion.controllers',[])
	.controller('EdicionController',EdicionController)

function EdicionController($scope, $http) {
	var st_id = window.location.search.split('?')[1]
	$scope.st_id = st_id,
    $scope.updSeguridadTranquera = function(){
    	console.log('sending...')
    	console.log('Token '+localStorage.getItem('apirest_token'))
        $http({
            url: 'http://localhost:8000/seguridad/api_tranquera/'+$scope.st_id+'/',
            method: 'PUT',
            headers : { 'Authorization': 'Token '+localStorage.getItem('apirest_token') },
            withCredentials: false,
            data: {
                'chofer': 'http://localhost:8000/seguridad/api_tranquera/chofer/26192/',
                'tracto': 'http://localhost:8000/seguridad/api_tranquera/parte_camion/7816/',
                'permitir_salida':false,
            },
        }).then(function successCallback(response) {
            console.log(response)
        }, function errorCallback(response) {
            console.log("err");
        });
    }
}

