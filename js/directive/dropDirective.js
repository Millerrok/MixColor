/**
 * Created by Maxim on 16.11.2014.
 */
App.directive('droppableElement', function() {
    return {
        link: function(scope, $element,attr) {
            var element = $element[0];

            var dragOver=  function(event) {
                event.dataTransfer.dropEffect = 'move';
                if (event.preventDefault) event.preventDefault();
            };

            var drop = function (event) {

                if (event.stopPropagation) event.stopPropagation();
                this.classList.remove('over');

                var dragObjId = event.dataTransfer.getData('text');
                scope.mixColor( attr.elementid,dragObjId);
            };

            element.addEventListener('dragover',dragOver,false);
            element.addEventListener('drop',drop,false);
        }
    }
});