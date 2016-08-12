angular.module('apirest', [
        'apirest.SeguridadTranquera','ngRoute'
    ])

    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/registro', {
                    templateUrl: 'templates/registro.html'
                }).
                otherwise({
                    redirectTo: '/registro'
                });
        }])

    .controller('GlobalController', ['rest_router','$scope', function(rest_router,$scope) {
        $scope.templates = rest_router.urlList
        rest_router.getUrl('registro',function(template){
            $scope.template = template
        })
    }])

    .factory("rest_router", function(){
        this.urlList = 
            [
                { name: 'registro', url: '/templates/registro.html'},
                { name: 'edicion', url: '/templates/edicion.html'}
            ],
        this.getUrl = function(name, callback){
            angular.forEach(this.urlList,function(value, key){
                //console.log(String(value.name),String(name))
                if (String(value.name) == String(name)) {
                    return callback(value)
                }
            })
        }
        return this;
   })