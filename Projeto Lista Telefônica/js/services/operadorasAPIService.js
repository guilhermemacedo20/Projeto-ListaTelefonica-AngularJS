angular.module("listaTelefonica").service("operadorasAPI",function($http){
    this.getOperadoras = function(){
        return $http.get("http://localhost:8000/operadoras");
    }
});