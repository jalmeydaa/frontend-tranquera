angular  
    .module("apirest", ["apirest.controllers", "satellizer"])
    .config(["$authProvider", function($authProvider) {
        // Parametros de configuración
        //$authProvider.httpInterceptor = function() { return true; },
        $authProvider.httpInterceptor = false;
        $authProvider.withCredentials = false;
        $authProvider.tokenRoot = null;
        $authProvider.baseUrl = '/';
        $authProvider.loginUrl = "http://127.0.0.1:8000/seguridad/api-token-auth/";
        $authProvider.signupUrl = "http://127.0.0.1:8000/seguridad/api-token-auth/";
        $authProvider.tokenName = 'token';
        $authProvider.tokenPrefix = 'apirest';

        $authProvider.tokenHeader = 'Authorization';
        $authProvider.tokenType = 'Bearer';

        $authProvider.storageType = 'localStorage';
    }]);