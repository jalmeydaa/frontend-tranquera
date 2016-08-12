angular
    .module('apirest', [])
    // .controller('GlobalController', ['rest_router','$scope', function(rest_router,$scope) {
    //     $scope.templates = rest_router.urlList
    //     rest_router.getUrl('registro',function(template){
    //         $scope.template = template
    //     })
    // }])
    .controller('ControllerApiRest', function () {
       console.log('En linea')
    });