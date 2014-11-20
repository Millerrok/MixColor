/**
 * Created by Maxim on 16.11.2014.
 */
App.factory('dataService',['$http', function($http){
    return{
        getData:function(callback) {
            $http.get('/color/data/data.json')
                .success(callback)
                .error(function (data, status) {
                    console.log(status);
                });
        },
        setStore:function(key,data){
            return localStorage.setItem(key, JSON.stringify(data));
        },
        getStore:function(key){
            return localStorage.getItem(key);
        }
    };

}]);