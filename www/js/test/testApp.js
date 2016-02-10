// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('testStarter', ['ionic', 'testStarter.testControllers','testStarter.testServices'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'test/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.test01', {
    url: '/test01',
    views: {
      'tab-test01': {
        templateUrl: 'test/tab-test01.html',
        controller: 'test01Ctrl'
      }
    }
  })

  .state('tab.test02', {
      url: '/test02',
      views: {
        'tab-test02': {
          templateUrl: 'test/tab-test02.html',
          controller: 'test02Ctrl'
        }
      }
    })

  .state('tab.test03', {
           url: '/test03',
           views: {
             'tab-test03': {
               templateUrl: 'test/tab-test03.html',
               controller: 'test03Ctrl'
             }
    }
  })

  .state('tab.test04', {
        url: '/test04',
        views: {
          'tab-test04': {
            templateUrl: 'test/tab-test04.html',
            controller: 'test04Ctrl'
          }
        }
      })

  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/test01');

});

