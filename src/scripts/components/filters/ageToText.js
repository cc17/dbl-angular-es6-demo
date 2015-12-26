let module = angular.module('app.filters');
const ageMap = {
  18:'壹拾捌'
};
function filterFn(){
  return function(age){
    return ageMap[age];
  }
}
module.filter('ageToText',filterFn);