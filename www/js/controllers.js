angular.module('app.controllers', ['ion-gallery'])
     
.controller('detailsCtrl',function($scope,$stateParams,$http,$state) {

 $scope.getDetails=function()
	 {
      var data={action:"getDetails"};
        $http({
            method : "GET",
            url : "http://localhost/app-api/nepaltravel.php",
            params:data
        }).then(function(response)
        {	/*console.log(response);*/
            $scope.details=[];
        	$scope.details=response.data.data;
        	$scope.count=0;
        })
    
    }
    $scope.geteventDetails=function()
     {
      var data={action:"geteventDetails"};
        $http({
            method : "GET",
            url : "http://localhost/app-api/nepaltravel.php",
            params:data
        }).then(function(response)
        {   /*console.log(response);*/
            $scope.details=[];
            $scope.details=response.data.data;
            $scope.count=0;
        })
    
    }   

    $scope.test=function(user_id)
    {
    	console.log(user_id);
       
    	$state.go('event_list_page',{
                            id:user_id
                          });// passing the event id value when it is clicked from id which is obtained from details.html

    }

$scope.init=function()
	{
		
		$scope.getDetails();
		
	}();
})
   
.controller('homeCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function($scope, $stateParams,$http,$state ) {
	$scope.start = function() 
{
  $state.go('details');
}

})
   
.controller('eventlistCtrl',
function($scope,$stateParams,$state,$http) 
{    
        console.log($state.params.id);
        $scope.geteventDetails=function()
                    {
                        var data={action:"getDataById",id:$stateParams.id};
                        $http({
                                    method : "GET",
                                    url : "http://localhost/app-api/nepaltravel.php",
                                    params:data
                             }).then(function(response)
        {                   console.log(response.data.data);
                            $scope.list=response.data.data;
          
           
        })
                    }
        $scope.init=function()
                    {
                        $scope.geteventDetails();
                        $scope.eventdetailpage=false;
                    }();  
        $scope.test1=function(testid)
                    {   
                        console.log(testid);
                        $state.go('eventlistDetails',{evt_id:testid.event_list_id});
                    }

})
   
.controller('eventlistDetailsCtrl',
function($scope,$stateParams,$state,$http) {
  console.log($stateParams.evt_id);
   $scope.getDataByEventId=function()
                    {
                        var data={action:"getDataByEventId",id:$stateParams.evt_id};
                        $http({
                                    method : "GET",
                                    url : "http://localhost/app-api/nepaltravel.php",
                                    params:data
                             }).then(function(response)
        {                /*console.log(response.data.data);*/
                            $scope.listDetail=response.data.data;
                            console.log($scope.listDetail);

        })
                    }
        $scope.init=function()
                    {
                        $scope.getDataByEventId();
                    }();  

                    $scope.items = [
  {
    src:'http://www.wired.com/images_blogs/rawfile/2013/11/offset_WaterHouseMarineImages_62652-2-660x440.jpg',
    sub: 'This is a <b>subtitle</b>'
  },
  {
    src:'http://www.gettyimages.co.uk/CMS/StaticContent/1391099215267_hero2.jpg',
    sub: '' /* Not showed */
  },
  {
    src:'http://www.hdwallpapersimages.com/wp-content/uploads/2014/01/Winter-Tiger-Wild-Cat-Images.jpg',
    thumb:'http://www.gettyimages.co.uk/CMS/StaticContent/1391099215267_hero2.jpg'
  }
]


})
   
.controller('templesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('culturesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('adventureCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('travelPartnersCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('trekkingClimbingRoutesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('accomodationAndStayCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('contentSamplePageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('galleryCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('aboutCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('rateCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('feedbackCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 

.controller('infoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 