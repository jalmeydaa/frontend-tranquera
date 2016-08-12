angular  
    .module("apirest.SeguridadTranquera", [])
    .controller("SeguridadTranquera", ['rest_router','$scope','$http',SeguridadTranquera])

function SeguridadTranquera(rest_router,$scope, $http) {

    $scope.next = function(){
        rest_router.getUrl('edicion', function(template){
            $scope.template = template
        })
    },
    $scope.setId = function(name_input,id){
        if (name_input == 'brevete') {
            $scope.brevete_id = id
        } else if (name_input == 'tracto') {
            $scope.tracto_id = id
        } else if (name_input == 'carreta') {
            $scope.carreta_id = id
        }
    },
    $scope.buscarChofer = function(obj){
        if (obj==undefined) {
            param = ''
        } else {
            param = obj.brevete.toUpperCase()
        }
        $http({
            url: 'http://localhost:8000/seguridad/api_querys/personaltercero/',
            method: 'GET',
            params: {
                'brevete':param,
            },
        }).then(function successCallback(response) {
            $scope.respuesta = response.data
            $scope.name_input = 'brevete'
        }, function errorCallback(response) {
            console.log("err");
        });
    },
    $scope.buscarTracto = function(obj){
        if (obj==undefined) {
            param = ''
        } else {
            param = obj.tracto.toUpperCase()
        }
        $http({
            url: 'http://localhost:8000/seguridad/api_querys/partecamion/',
            method: 'GET',
            params: {
                'tracto':obj.tracto.toUpperCase()
            },
        }).then(function successCallback(response) {
            $scope.respuesta = response.data
            $scope.name_input = 'tracto'
        }, function errorCallback(response) {
            console.log("err");
        });
    },
    $scope.buscarCarreta = function(obj){
        if (obj==undefined) {
            param = ''
        } else {
            param = obj.carreta.toUpperCase()
        }
        $http({
            url: 'http://localhost:8000/seguridad/api_querys/partecamion/',
            method: 'GET',
            params: {
                'carreta':obj.carreta.toUpperCase()
            },
        }).then(function successCallback(response) {
            $scope.respuesta = response.data
            $scope.name_input = 'carreta'
        }, function errorCallback(response) {
            console.log("err");
        });
    }
    $scope.buscarSeguridadTranquera = function(obj){
        $http({
            url: 'http://localhost:8000/seguridad/api_querys/seguridadtranquera/',
            method: 'GET',
            params: {
                'brevete':obj.brevete.toUpperCase(),
                'tracto':obj.tracto.toUpperCase(),
                'carreta':obj.carreta.toUpperCase(),
            },
        }).then(function successCallback(response) {
            $scope.respuesta = response.data
        }, function errorCallback(response) {
            console.log("err");
        });
    }

    $scope.addSeguridadTranquera = function(obj){
        var token = "'" + 'Token ' + localStorage.getItem('apirest_token') + "'";
        
        $http({
            url: 'http://localhost:8000/seguridad/api_tranquera/',
            method: 'GET',
            headers : {
                'Authorization': 'Token '+localStorage.getItem('apirest_token')
            },
            withCredentials: false,
            /*
            data: {
                "chofer": "http://localhost:8000/seguridad/api_tranquera/chofer/26192/",
                "tracto": "http://localhost:8000/seguridad/api_tranquera/parte_camion/7816/",
                "carreta1": "http://localhost:8000/seguridad/api_tranquera/parte_camion/7817/",
                'carreta2': "",
                "contenedor_precinto1": "ABC", 
                "contenedor_precinto2": "XYZ", 
                "contenedor_precinto3": "124", 
                "contenedor_precinto4": "789", 
                "cerrado": true, 
                "permitir_salida": true,
            }*/
        }).then(function successCallback(response) {
            $scope.respuesta = response.data
            console.log(response)
        }, function errorCallback(response) {
            console.log(response);
        })
        
        
    }
}