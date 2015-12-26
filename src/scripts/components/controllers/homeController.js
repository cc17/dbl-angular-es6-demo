let module = angular.module('app.controllers');

class HomeController {
  constructor(homeRequest){
    this.homeRequest = homeRequest;
    let vm = this;
    let home = {
      name:'cc',
      changeName:function(){
        alert(1);
      }
    };
    angular.extend(vm,home);
    this.fetch();
  }
  fetch(){
    let vm = this;
    this.homeRequest.fetchMainList().then((res)=> {
      vm.ajaxData = res.data.data;
    });
  }
}
HomeController.$inject = ['homeRequest'];

module.controller('homeController',HomeController);