/**
 * Created by Maxim on 16.11.2014.
 */
App.controller('appCtrl',['$scope', 'dataService','$timeout',function($scope, dataService, $timeout){
    $scope.grid=[];
    dataService.getData(function(data){
        $scope.grid= data.grid;
        $scope.palettes=data.palettes;
    });
    var alertMsg = function(message){
        $scope.alert=message;
        $timeout(function(){
            $scope.alert=null;
        },3000);
    };
    $scope.reset = function () {
        delete localStorage['colorPalette'];
        alertMsg('you removed our saving :( ');
    };

    $scope.save=function(){
        $scope.reset();
        localStorage.setItem('colorPalette', JSON.stringify($scope.grid));
        alertMsg('you create new save :)');

    };

    $scope.load=function(){
        var value = localStorage.getItem('colorPalette');
        if ((typeof(value) == 'undefined') && (value == null)){
            alertMsg('load error XP');
            return;
        }

        $scope.grid = JSON.parse(value);
        alertMsg('you loaded palette :D');

    };

    $scope.mixColor = function(grid,palette) {
        var paletteObj=null;
        var type=palette.split("@")[1];
            palette=palette.split("@")[0];
        var arr=[];

        // run filter
        switch (type){
            case "palette":
                arr=$scope.palettes;
                break;
            case "grid":
                arr=$scope.grid;
                break;
            default:
                alertMsg('Sorry, please try again.');
                break;
        }

        for (var i = 0; i < arr.length; i++) {
            if (arr[i].id == palette) {
                paletteObj = arr[i];
            }
        }

        // color mixer
        var mixer=function(obj){

            obj.r = Math.round((obj.r + paletteObj.r) / 2);
            obj.g = Math.round((obj.g + paletteObj.g) / 2);
            obj.b = Math.round((obj.b + paletteObj.b) / 2);

            return;
        };
        // set $scope
        for(var i=0;i<$scope.grid.length;i++){
            if($scope.grid[i].id==grid){
                $scope.$apply(function() {
                    mixer($scope.grid[i]);
                });
                break;
            }
        }
    };
}]);