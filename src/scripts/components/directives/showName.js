let module = angular.module('app.directives');
function directFn(){
  return {
    restrict:'AE',
    link:function(scope,elem){
      elem.html('这是测试');
    }
  };
}
module.directive('showName',directFn);