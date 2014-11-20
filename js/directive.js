/**
 * Created by Maxim on 16.11.2014.
 */
App.directive('colorItem',['$timeout',function($timeout){
    return function(scope,$element,attr) {
        var data = scope.element;
        var element=$element[0];

        element.setAttribute("data-color",JSON.stringify(data));
        element.style.backgroundColor='rgb('+data.r+','+data.g+','+data.b+')';
    }
}]);
