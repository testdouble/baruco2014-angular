(function () {
  "use strict"
   window.tasks = [{
    description: "Add the ng-app='app' directive",
    complete: true,
  },{
    description: "Add ng-controller='listCtrl' to the same div",
    complete: true,
  },{
    description: "Add a listCtrl angular controller function in app/assets/javascripts/list/list_ctrl.js",
    complete: true,
  },{
    description: "In the controller, assign tasks to $scope.tasks",
    complete: false,
  },{
    description: "Use ng-repeat to render each li",
    complete: false,
  },{
    description: "Add a <input type='checkbox'> to mark tasks complete",
    complete: false,
  },{
    description: "use ng-submit to push new tasks into the tasks array",
    complete: false,
  },{
    description: "clear the input field after a new task has been added",
    complete: false,
  },{
    description: "**bonus** Complete tasks should be styled with text-decoration:line-through",
    complete: false,
  },{
    description: "**bonus** Allow users to delete tasks",
    complete: false,
  },{
    description: "**bonus** Research the $http service to persist new tasks",
    complete: false,
  }];
})();
