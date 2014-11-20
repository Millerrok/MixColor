/**
 * Created by Maxim on 16.11.2014.
 */

App.directive('draggableElement', function() {
    return function(scope, $element,attr) {

        var element  = $element[0];
        element.draggable = true;

        var dragStart=function(drag) {

            drag.dataTransfer.setData('Text', attr.elementid+'@'+attr.elementtype);
        };
        element.addEventListener('dragstart',dragStart,false);
    }
});