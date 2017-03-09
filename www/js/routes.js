angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('eventlistDetails', {
    url: '/eventlistDetails/:evt_id',
    templateUrl: 'templates/eventlistDetails.html',
    controller: 'eventlistDetailsCtrl'
  })

 .state('details', {
    url: '/details',
    templateUrl: 'templates/details.html',
    controller: 'detailsCtrl'
  })
  .state('event_list_page', {
    url: '/event_list_page/:id',
    templateUrl: 'templates/event_list_page.html',
    controller: 'eventlistCtrl'
  })


  .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  .state('info', {
    url: '/info',
    templateUrl: 'templates/info.html',
    controller: 'infoCtrl'
  })

  .state('locations', {
    url: '/locations',
    templateUrl: 'templates/locations.html',
    controller: 'locationsCtrl'
  })

  .state('temples', {
    url: '/temples',
    templateUrl: 'templates/temples.html',
    controller: 'templesCtrl'
  })

  .state('cultures', {
    url: '/cultures',
    templateUrl: 'templates/cultures.html',
    controller: 'culturesCtrl'
  })

  .state('adventure', {
    url: '/adventure',
    templateUrl: 'templates/adventure.html',
    controller: 'adventureCtrl'
  })

  .state('travelPartners', {
    url: '/travel_partners',
    templateUrl: 'templates/travelPartners.html',
    controller: 'travelPartnersCtrl'
  })

  .state('trekkingClimbingRoutes', {
    url: '/trekking_&_climbing_routes',
    templateUrl: 'templates/trekkingClimbingRoutes.html',
    controller: 'trekkingClimbingRoutesCtrl'
  })

  .state('accomodationAndStay', {
    url: '/accomodation_and_stay',
    templateUrl: 'templates/accomodationAndStay.html',
    controller: 'accomodationAndStayCtrl'
  })

  .state('contentSamplePage', {
    url: '/content_sample_page',
    templateUrl: 'templates/contentSamplePage.html',
    controller: 'contentSamplePageCtrl'
  })

  .state('gallery', {
    url: '/gallery',
    templateUrl: 'templates/gallery.html',
    controller: 'galleryCtrl'
  })

  .state('about', {
    url: '/about',
    templateUrl: 'templates/about.html',
    controller: 'aboutCtrl'
  })

  .state('rate', {
    url: '/rate',
    templateUrl: 'templates/rate.html',
    controller: 'rateCtrl'
  })

  .state('feedback', {
    url: '/feedback',
    templateUrl: 'templates/feedback.html',
    controller: 'feedbackCtrl'
  })

$urlRouterProvider.otherwise('/home')

  

});