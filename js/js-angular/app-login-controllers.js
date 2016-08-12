angular  
    .module("apirest.controllers", [])
    .controller("LoginController", LoginController)
    .controller("LogoutController", LogoutController)

function LoginController($auth, $location, $scope) {  
    $scope.username='juanqui'
    $scope.password='juanqui'
    $scope.login = function(){
        console.log('send...')
        $auth.login({
            username: $scope.username,
            password: $scope.password
        })
        .then(function(){
            // Si se ha logueado correctamente, lo tratamos aquí.
            // Podemos también redirigirle a una ruta
            console.log('ok')
            window.location.href = '/registro.html'
        })
        .catch(function(response){
            // Si ha habido errores llegamos a esta parte
            console.log(response)
        });
    }
}

function LogoutController($auth, $location) {  
    $auth.logout()
        .then(function() {
            // Desconectamos al usuario y lo redirijimos
            $location.path("/")
        });
}